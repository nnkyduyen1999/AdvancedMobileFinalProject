import constants from "../globals/constant";

module.exports.authenticationReducer = (prevState, action) => {
  switch (action.type) {
    case constants.dispatchTypes.LoginRequest:
      return {
        ...prevState,
        isAuthenticating: true,
      };
    case constants.dispatchTypes.LoginSuccess:
      return {
        ...prevState,
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.data.token,
        userInfo: action.data.userInfo,
        errMsg: null,
      };
    case constants.dispatchTypes.LoginFailure:
      return {
        ...prevState,
        isAuthenticating: false,
        isAuthenticated: false,
        errMsg: action.data.message,
      };
    default:
      throw new Error();
  }
};
