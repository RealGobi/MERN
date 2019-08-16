import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from './Component/AppNavBar';
import List from './Component/List';
import Modal from './Component/itemModal';
import { Container } from 'reactstrap';


class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <AppNavBar />
          <Container>
          <Modal />
          <List />
          </Container>
        </Provider>
      </div>
    );
  }
}

export default App;
