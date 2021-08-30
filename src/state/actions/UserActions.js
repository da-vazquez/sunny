import axiosWithAuth from "../../utils/axiosWithAuth"
import * as userActions from "../constants/userConstants"


export const register = (username, password) => (dispatch) => {
  dispatch({type: userActions.USER_REGISTER_REQUEST})
    axiosWithAuth().post('/api/auth/register', {username, password})
      .then(res => {
        return dispatch({type: userActions.USER_REGISTER_SUCCESS, payload: res})
      })
      .catch(err => {
        dispatch({
          type: userActions.USER_REGISTER_FAILURE, 
          payload: 
          err.response && err.response.message ?
          err.response.message : err.message
        })
      })
    }

export const login = (username, password) => (dispatch) => {
  dispatch({type: userActions.USER_LOGIN_REQUEST})
    axiosWithAuth().post('/api/auth/login', {username, password})
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        dispatch({type: userActions.USER_LOGIN_SUCCESS, payload: res.data.username})
        dispatch({type: userActions.SET_ID, payload: res.data.user_id})
      })
      .catch(err => {
        dispatch({
          type: userActions.USER_LOGIN_FAILURE,
          payload:
          err.response && err.response.message ?
          err.response.message : err.message
        })
      })
    }


export const logout = () => (dispatch) => {
  dispatch({type: userActions.USER_LOGGED_OUT})
  localStorage.removeItem('token'); 
}   