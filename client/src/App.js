import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from './Component/AppNavBar';
import List from './Component/List';

class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <AppNavBar />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;
