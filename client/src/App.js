import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from './component/AppNavBar';
import List from './component/List';
import Modal from './component/itemModal';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authAction';
import Form from './component/Forms';



class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render () {
    return (
      <div>
        <Provider store={store}>
          <AppNavBar />
          <Container>
          <Modal />
          <List />
          <Form />
          </Container>
        </Provider>
      </div>
    );
  }
}

export default App;
