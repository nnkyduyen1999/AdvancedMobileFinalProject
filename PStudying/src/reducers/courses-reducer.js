import constants from '../globals/constant';

module.exports.coursesReducer = (prevState, action) => {
    switch (action.type) {
        case constants.dispatchTypes.CoursesRequest:
            return {
                ...prevState, 
                isLoadingCourses: true,
            }
        case constants.dispatchTypes.GetTopNewSuccess:
            return {
                ...prevState,
                isLoadingCourses: false,
                topNewCourses: action.data.payload
            }
        case constants.dispatchTypes.GetTopNewFailure:
            return { 
                ...prevState,
                isLoadingCourses: false,
                topNewCourses: [],
            }
        case constants.dispatchTypes.GetTopSellSuccess:
            return {
                ...prevState,
                isLoadingCourses: false,
                topSellCourses: action.data.payload
            }
        case constants.dispatchTypes.GetTopSellFailure:
            return { 
                ...prevState,
                isLoadingCourses: false,
                topSellCourses: []
            }

    }
}