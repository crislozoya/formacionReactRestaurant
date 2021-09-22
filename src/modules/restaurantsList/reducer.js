import {
    USER_RESTAURANT_REQUEST,
    USER_RESTAURANT_RESPONSE
  } from './actions';
  
  const initialState = {
    userInfo: null,
    loading: false,
    error: null
  };
  
  const login = (state = initialState, action) => {
    switch (action.type) {
      case USER_RESTAURANT_RESPONSE:
        return {
          ...state,
          loading : true
        };
      case USER_RESTAURANT_RESPONSE:
        return {
            ...state,
            loading : false,
            userInfo : action.userInfo
          };
      default:
        return state;
    }
  };
  
  export default login;