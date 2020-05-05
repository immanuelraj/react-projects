import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Tweet from '../containers/tweet/tweet.js'
import Recipe from '../containers/recipe/recipe.js'
import Todo from '../containers/todo/todo.js'
import App from '../containers/app/app.js'
import Shop from '../containers/shop/shop.js'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={App}/>
      <Route path='/recipe' component={Recipe}/>
      <Route path='/todo' component={Todo}/>
      <Route path='/tweet' component={Tweet}/>
      <Route path='/shop' component={Shop}/>
      <Route component={App}/>
    </Switch>
  )
}