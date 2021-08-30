import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as auth from './reducers/userReducer.js'
import * as post from './reducers/communityReducer.js'


const reducer = combineReducers({
  login: auth.userLoginReducer,
  register: auth.userRegisterReducer,
  newPost: post.communityPostReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store