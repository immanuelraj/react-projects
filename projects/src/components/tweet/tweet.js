import React from 'react'
import './tweet.css'

function Tweet (props) {
    return (
        <div className='tweet'>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>No of likes</h3>
        </div>
    );
}

export default Tweet;