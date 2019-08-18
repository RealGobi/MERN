import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types';

class List extends Component {


    static protoType = {
        getItems: PropTypes.func.isRequired,
        deleteItem: PropTypes.func,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        const { items } = this.props.item;

        return(
            <Container>
                 <ListGroup>
                     <TransitionGroup className="list">
                         {items.map(({_id, name, info}) => (
                             <CSSTransition key={_id} classNames="fade" timeout={450}>
                                 <ListGroupItem style={{marginTop:'2rem'}}>
                                     { this.props.isAuthenticated ?
                                     <Button className="removeBTN" color="danger" size="sm" onClick=
                                     {this.onDeleteClick.bind(this, _id)}>
                                         &times;
                                     </Button>
                                    :
                                    null
                                    }
                                    <strong>{name}</strong>
                                     <hr />
                                     {info}
                                 </ListGroupItem>
                             </CSSTransition>
                         ))}
                     </TransitionGroup>
                 </ListGroup>
            </Container>
        )
    }
}



const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getItems, deleteItem })(List);