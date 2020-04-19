import React from 'react'
import './tweet.css'

function Tweet () {
    
  const users = ([
    {name:'Imman', message:'I\'am cool buddy'},
    {name:'Raj', message:'COVID - 19'},
    {name:'Durai', message:'Let\'s chill baby'}
  ]);

  return (
    <div className='tweets'>
      {users.map(user => (
        <div className='tweet'>
          <h3>{user.name}</h3>
          <h3>Tweet: {user.message}</h3>
          <h3>likes: 100</h3>
        </div>
      ))}
    </div>
  );
}

export default Tweet;