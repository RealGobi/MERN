import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';


class ItemModal extends Component {
    state = {
        modal: false,
        name:'',
        info:''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.info]: e.target.info });
      };
    
      onSubmit = e => {
        e.preventDefault();
    
        const newItem = {
          name: this.state.name,
          info: this.state.info
        };
    
        // Add item via addItem action
        this.props.addItem(newItem);
    
        // Close modal
        this.toggle();
      };
    render(){
        return(
            <div>
                { this.props.isAuthenticated ? 
                <Button
                color='dark'
                style={{marginBottom:'2rem'}}
                onClick={this.toggle}>
                Lägg till produkt
                </Button> 
                :
                 <h5 className="mb-3 ml-4">
                    Logga in eller registrera dig för att lägga till/ ta  bort.
                </h5> }
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Lägg till:</ModalHeader>
                    <ModalBody>
                        <Form  onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Produkt:</Label>
                                <Input 
                                type="text"
                                name="name"
                                id="item"
                                onChange={this.onChange}
                                />
                                <Label for="info">Beskrivning:</Label>
                                <Input 
                                type="textarea"
                                name="info"
                                id="info"
                                onChange={this.onChange}
                                />
                                <Button 
                                color='dark'
                                style={{marginTop:'2rem'}}
                                block
                                >
                                    Lägg till produkt
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addItem })(ItemModal);