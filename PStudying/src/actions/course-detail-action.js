import constants from "../globals/constant";
import { getCourseDetailService } from "../core/services/course-services";

const getCourseDetailAction = (dispatch, idCourse, idUser, token) => {
  dispatch({ type: constants.dispatchTypes.GetCourseDetailRequest });
  getCourseDetailService(idCourse, idUser, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.GetCourseDetailSuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.GetCourseDetailFailure,
          data: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: constants.dispatchTypes.GetCourseDetailFailure,
        data: err.response.data,
      });
    });
};

export { getCourseDetailAction };
