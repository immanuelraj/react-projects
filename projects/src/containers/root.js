import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from '../store/store.js'
import {Router} from 'react-router-dom'
import Routes from '../routes/index'
import history from '../services/history'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes/>
        </Router>
      </Provider>
    );
  }
}

export default Root;