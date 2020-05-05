import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './app.css';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <Link to='/recipe'><h2> Recipe</h2></Link>
        <Link to='/todo'><h2>Todo</h2></Link>
        <Link to='/tweet'><h2>Tweet</h2></Link>
        <Link to='/shop'><h2>Cake</h2></Link>
      </div>
    );
  }
}

export default App;
