import * as types from '../constants/actionTypes';


const initialState = {
  usernameStr: '',
  passwordStr: '',
  isLoggedIn: true,
  isSignup: false,
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_USERNAME_STR:
      return {
        ...state,
        usernameStr: action.payload
      }
    case types.UPDATE_PASSWORD_STR:
      //return state with payload inserted into password
      return {
        ...state,
        passwordStr: action.payload
      }

      case types.IS_LOGIN:
        const isLoggedIn = true;
        return {
          ...state,
          isLoggedIn
        }

      case types.SIGNUP_ONCLICK:
        const isSignup = true;
        return {
          ...state,
          isSignup
        }
      
      default: 
        return state;
  }
};


export default authReducer;