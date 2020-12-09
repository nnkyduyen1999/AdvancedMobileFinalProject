import React, { useReducer } from "react";
import { authenticationReducer } from "../reducers/authentication-reducer";
import { login } from "../actions/authentication-action";

const AuthenticationContext = React.createContext();
const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  userInfo: null,
  token: null,
  errMsg: null,
};

function AuthenticationProvider(props) {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);
  return (
    <AuthenticationContext.Provider value={{ state, login: login(dispatch) }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}
export { AuthenticationContext, AuthenticationProvider };
