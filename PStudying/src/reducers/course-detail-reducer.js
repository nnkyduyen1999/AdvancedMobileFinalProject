import constants from "../globals/constant";

module.exports.courseDetailReducer = (prevState, action) => {
  switch (action.type) {
    case constants.dispatchTypes.GetCourseDetailRequest:
      return {
        ...prevState,
        isLoading: true,
      };
    case constants.dispatchTypes.GetCourseDetailSuccess:
      return {
        ...prevState,
        isLoading: false,
        courseInfo: action.data.payload,
      };
    case constants.dispatchTypes.GetCourseDetailFailure:
      return {
        ...prevState,
        isLoading: false,
        errMsg: action.data.message,
      };
  }
};
