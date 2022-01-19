import axiosWithAuth from "../../utils/axiosWithAuth"
import * as communityActions from "../constants/communityConstants"

export const newPost = (body, username) => (dispatch) => {
  dispatch({type: communityActions.ADD_POST_REQUEST})
    axiosWithAuth().post('/api/posts', {body, username})
      .then(res => {
        console.log(res)
        return dispatch({type: communityActions.ADD_POST_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({
          type: communityActions.ADD_POST_FAILURE,
          payload:
          err.response && err.response.message ?
          err.response.message : err.message
        })
      })
    }

export const deletePost = (post_id, username) => (dispatch) => {
  dispatch({type: communityActions.DELETE_POST_REQUEST})
    axiosWithAuth().delete(`/api/posts/:${post_id}`, {username})
      .then(res => {
        console.log(res)
        return dispatch({type: communityActions.DELETE_POST_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({
          type: communityActions.DELETE_POST_FAILURE,
          payload:
          err.response && err.response.message ?
          err.response.message : err.message
        })
      })
    }    