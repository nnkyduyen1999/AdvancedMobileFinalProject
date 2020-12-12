import constants from "../globals/constant";
import { updateProfileService } from "../core/services/user-services";

const updateProfileAction = (dispatch) => (name, avatar, phone, token) => {
  dispatch({ type: constants.dispatchTypes.UpdateProfileRequest });

  updateProfileService(name, avatar, phone, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.UpdateProfileSuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.UpdateProfileFailure,
          data: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: constants.dispatchTypes.UpdateProfileFailure,
        data: err.response.message,
      });
    });
};

export { updateProfileAction };
