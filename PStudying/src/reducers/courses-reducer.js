import constants from "../globals/constant";

module.exports.coursesReducer = (prevState, action) => {
  switch (action.type) {
    case constants.dispatchTypes.CoursesRequest:
      return {
        ...prevState,
        isLoadingCourses: true,
      };
    case constants.dispatchTypes.GetTopNewSuccess:
      return {
        ...prevState,
        isLoadingCourses: false,
        topNewCourses: action.data.payload,
      };
    case constants.dispatchTypes.GetTopNewFailure:
      return {
        ...prevState,
        isLoadingCourses: false,
        errMsg: action.data.message,
      };
    case constants.dispatchTypes.GetTopSellSuccess:
      return {
        ...prevState,
        isLoadingCourses: false,
        topSellCourses: action.data.payload,
      };
    case constants.dispatchTypes.GetTopSellFailure:
      return {
        ...prevState,
        isLoadingCourses: false,
        errMsg: action.data.message,
      };
    case constants.dispatchTypes.GetTopRateSuccess:
      return {
        ...prevState,
        isLoadingCourses: false,
        topRateCourses: action.data.payload,
      };
    case constants.dispatchTypes.GetTopRateFailure:
      return {
        ...prevState,
        isLoadingCourses: false,
        errMsg: action.data.message,
      };
    case constants.dispatchTypes.GetRecommendSuccess:
      return {
        ...prevState,
        isLoadingCourses: false,
        recommendedCourses: action.data.payload,
      };
    case constants.dispatchTypes.GetRecommendFailure:
      return {
        ...prevState,
        isLoadingCourses: false,
        errMsg: action.data.message,
      };
    case constants.dispatchTypes.GetFavoriteSuccess:
      return {
        ...prevState,
        isLoadingCourses: false,
        favoriteCourses: action.data.payload.map((course) => ({
          id: course.id,
          title: course.courseTitle,
          price: course.coursePrice,
          imageUrl: course.courseImage,
          instructorId: course.instructorId,
          instructorName: course.instructorName,
          soldNumber: course.courseSoldNumber,
          contentPoint: course.courseContentPoint,
          formalityPoint: course.courseFormalityPoint,
          presentationPoint: course.coursePresentationPoint,
          averagePoint: course.courseAveragePoint,
        }))
      };
    case constants.dispatchTypes.GetFavoriteFailure:
      return {
        ...prevState,
        isLoadingCourses: false,
        errMsg: action.data.message,
      };
    case constants.dispatchTypes.GetProcessSuccess:
      return {
        ...prevState,
        isLoadingCourses: false,
        processCourses: action.data.payload.map((course) => ({
          id: course.id,
          title: course.courseTitle,
          price: course.coursePrice,
          imageUrl: course.courseImage,
          instructorId: course.instructorId,
          instructorName: course.instructorName,
          soldNumber: course.courseSoldNumber,
          contentPoint: course.courseContentPoint,
          formalityPoint: course.courseFormalityPoint,
          presentationPoint: course.coursePresentationPoint,
          averagePoint: course.courseAveragePoint,
        })),
      };
    case constants.dispatchTypes.GetProcessFailure:
      return {
        ...prevState,
        isLoadingCourses: false,
        errMsg: action.data.message,
      };
    case constants.dispatchTypes.GetCategorySuccess:
      return {
        ...prevState,
        isLoadingCourses: false,
        category: action.data.payload,
      };
    case constants.dispatchTypes.GetCategoryFailure:
      return {
        ...prevState,
        isLoadingCourses: false,
        errMsg: action.data.message,
      };
  }
};
