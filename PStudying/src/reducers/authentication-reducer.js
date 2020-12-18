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
    case constants.dispatchTypes.UpdateProfileRequest:
      return {
        ...prevState,
        isAuthenticating: true,
      };
    case constants.dispatchTypes.UpdateProfileSuccess:
      return {
        ...prevState,
        isAuthenticating: false,
        isUpdated: true,
        userInfo: action.data.payload,
      };
    case constants.dispatchTypes.UpdateProfileFailure:
      return {
        ...prevState,
        isAuthenticating: false,
        isUpdated: false,
        errMsg: action.data.message,
      };
    case constants.dispatchTypes.LogOutRequest:
      return {
        ...prevState,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userInfo: null,
      };
    default:
      throw new Error();
  }
};
