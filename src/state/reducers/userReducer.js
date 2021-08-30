import * as userActions from "../constants/userConstants";

export const initialState = {
  username: "",
  user_id: "",
  loading: false,
  loggedIn: false, 
  userInfo: [],
  error: "",
}

export const userRegisterReducer = (state = initialState, action) => {
  switch(action.type) {
    case userActions.USER_REGISTER_REQUEST:
      return {loading: true};
    case userActions.USER_REGISTER_SUCCESS:
      return {loading: false, userInfo: action.payload};
    case userActions.USER_REGISTER_FAILURE:
      return {loading: false, error: action.payload};

    default: return state;
  }
}

export const userLoginReducer = (state = initialState, action) => {
  switch(action.type) {
    case userActions.USER_LOGIN_REQUEST:
      return {loading: true, loggedIn: false};
    case userActions.USER_LOGIN_SUCCESS:
      return {...state, loading: false, username: action.payload, loggedIn: true};  
    case userActions.SET_ID:
      return {...state, user_id: action.payload};
    case userActions.USER_LOGIN_FAILURE:
      return {loading: false, error: action.payload, loggedIn: false};
    case userActions.USER_LOGGED_OUT:
      return {loading: true, loggedIn: false, userInfo: ""}
    
    default: return state;
  }   
}