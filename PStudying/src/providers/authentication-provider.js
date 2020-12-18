import React, { useReducer } from "react";
import { authenticationReducer } from "../reducers/authentication-reducer";
import { login, logout } from "../actions/authentication-action";
import { updateProfileAction } from "../actions/user-action";

const AuthenticationContext = React.createContext();
const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  isUpdated: false,
  userInfo: null,
  token: null,
  errMsg: null,
};

function AuthenticationProvider(props) {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);
  return (
    <AuthenticationContext.Provider
      value={{
        state,
        login: login(dispatch),
        updateProfile: updateProfileAction(dispatch),
        logout: logout(dispatch)
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
}
export { AuthenticationContext, AuthenticationProvider };
