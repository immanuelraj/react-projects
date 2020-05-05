import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../../actions/cake'

function hookShop() {
  const numOfCake = useSelector(state => state.numOfCake)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>No. of Cakes - {numOfCake}</h3>
      <button onClick={() => {dispatch(buyCake())}}>Buy Cake</button>
    </div>
  )
}

export default hookShop
