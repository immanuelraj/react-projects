import { createStore } from 'react'
import cakeReducer from '../reducers/cake.js'

const store = createStore(cakeReducer);

export default store;