import constants from "../globals/constant";
import {
  getTopNewCoursesService,
  getTopSellCoursesService,
  getTopRateCoursesService,
} from "../core/services/course-services";

const getTopNewCourses = (dispatch) => {
  dispatch({ type: constants.dispatchTypes.CoursesRequest });
  getTopNewCoursesService()
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.GetTopNewSuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.GetTopNewFailure,
          data: res.data
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: constants.dispatchTypes.GetTopNewFailure,
        data: {
          message: err.response.message,
        },
      });
    });
};

const getTopSellCourses = (dispatch) => {
  dispatch({ type: constants.dispatchTypes.CoursesRequest });
  getTopSellCoursesService()
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.GetTopSellSuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.GetTopSellFailure,
          data: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: constants.dispatchTypes.GetTopSellFailure,
        data: {
          message: err.response.message,
        },
      });
    });
};

const getTopRateCourses = (dispatch) => {
  dispatch({ type: constants.dispatchTypes.CoursesRequest });
  getTopRateCoursesService().then(res => {
      if (res.status === 200) {
          dispatch({ type: constants.dispatchTypes.GetTopRateSuccess, data: res.data})
      } else {
          dispatch({ type: constants.dispatchTypes.GetTopRateFailure, data: res.data})
      }
  }).catch(err => {
      dispatch({ type: constants.dispatchTypes.GetTopRateFailure, data: {
          message: err.response.message
      }})
  })
};

export { getTopSellCourses, getTopNewCourses, getTopRateCourses };
