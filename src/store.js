import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as userReducer from './reducers/userReducer'


const reducer = combineReducers({
  login: userReducer.userLoginReducer,
  register: userReducer.userRegisterReducer,
  newPost: userReducer.userLoginReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store