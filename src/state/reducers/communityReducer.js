import * as communityActions from "../constants/communityConstants";

const initialState = {
  post: [],
  loading: false,
  error: ""
}

export const communityPostReducer = (state = initialState, action) => {
  switch(action.type) {
    case communityActions.ADD_POST_REQUEST:
      return {...state, loading: true};
    case communityActions.ADD_POST_SUCCESS:
      return {...state, loading: false, post: action.payload}
    case communityActions.ADD_POST_FAILURE:
      return {...state, error: action.payload}
    
    default: return state;
  }   
}