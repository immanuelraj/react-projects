import React, {useState} from 'react';
import Tweet from '../tweet/tweet.js'
import './App.css'

function App() {

  const [users, setusers] = useState([
    {name:'imman', message:'iam cool buddy'},
    {name:'Raj', message:'very bad ass'},
    {name:'Durai', message:'confident in learning'}
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
