import React, { Component } from './node_modules/react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from './node_modules/reactstrap';
import { connect } from './node_modules/react-redux';
import { addItem } from '../actions/itemActions';


class ItemModal extends Component {
    state = {
        modal: false,
        name:''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem= {
            name:this.state.name
        }
        // lägger till via addItem
        this.props.addItem(newItem);
        //stäng ner modulen
        this.toggle();

    }
    render(){
        return(
            <div>
                <Button
                color='dark'
                style={{marginBottom:'2rem'}}
                onClick={this.toggle}>
                    Add Item
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to list!</ModalHeader>
                    <ModalBody>
                        <Form  onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input 
                                type="text"
                                name="name"
                                id="item"
                                onChange={this.onChange}
                                />
                                <Button 
                                color='dark'
                                style={{marginTop:'2rem'}}
                                block
                                >
                                    Add Item
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
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);