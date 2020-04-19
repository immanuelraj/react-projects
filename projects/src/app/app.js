import React, {useState, Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Tweet from '../tweet/tweet.js';
import Recipe from '../recipe/recipe.js';
import Todo from '../todo/todo.js'
import './app.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='app'>
          <Link to='/recipe'><h2> Recipe</h2></Link>
          <Link to='/todo'><h2>Todo</h2></Link>
          <Link to='/tweet'><h2>Tweet</h2></Link>
        </div>
        <Switch>
          <Route path='/recipe' component={Recipe}/>
          <Route path='/todo' component={Todo}/>
          <Route path='/tweet' component={Tweet}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
