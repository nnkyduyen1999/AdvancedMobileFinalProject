import constants from "../globals/constant";
import {
  getTopNewCoursesService,
  getTopSellCoursesService,
  getTopRateCoursesService,
  getRecommendCoursesService,
  getFavoriteCoursesService,
  getProcessCoursesService,
  getCategoryService,
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
          data: res.data,
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
  getTopRateCoursesService()
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.GetTopRateSuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.GetTopRateFailure,
          data: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: constants.dispatchTypes.GetTopRateFailure,
        data: {
          message: err.response.message,
        },
      });
    });
};

const getRecommendCourses = (dispatch, idUser, token) => {
  dispatch({ type: constants.dispatchTypes.CoursesRequest });
  getRecommendCoursesService(idUser, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.GetRecommendSuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.GetRecommendFailure,
          data: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: constants.dispatchTypes.GetRecommendFailure,
        data: err.response.data,
      });
    });
};

const getFavoriteCourses = (dispatch, token) => {
  dispatch({ type: constants.dispatchTypes.CoursesRequest });
  getFavoriteCoursesService(token)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.GetFavoriteSuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.GetFavoriteFailure,
          data: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: constants.dispatchTypes.GetFavoriteFailure,
        data: err.response.data,
      });
    });
};

const getProcessCourses = (dispatch, token) => {
  dispatch({ type: constants.dispatchTypes.CoursesRequest });
  getProcessCoursesService(token)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.GetProcessSuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.GetProcessFailure,
          data: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: constants.dispatchTypes.GetProcessFailure,
        data: err.response.data,
      });
    });
};

const getCategory = (dispatch) => {
  getCategoryService()
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: constants.dispatchTypes.GetCategorySuccess,
          data: res.data,
        });
      } else {
        dispatch({
          type: constants.dispatchTypes.GetCategoryFailure,
          data: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: constants.dispatchTypes.GetCategoryFailure,
        data: err.response.data,
      });
    });
};

export {
  getTopSellCourses,
  getTopNewCourses,
  getTopRateCourses,
  getRecommendCourses,
  getFavoriteCourses,
  getProcessCourses,
  getCategory,
};
