import { loginService } from "../core/services/authentication-services";
import constants from '../globals/constant';

const login = (dispatch) => (email, password) => {
  dispatch({
      type: constants.dispatchTypes.LoginRequest
  })
  loginService(email, password)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.LoginSuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.LoginFailure,
          data: res.data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: constants.dispatchTypes.LoginFailure,
        data: error.response.data,
      });
    });
};

const logout = dispatch => () => {
  dispatch({
    type: constants.dispatchTypes.LogOutRequest,
  })
}



export { login, logout };
