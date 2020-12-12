import constants from '../globals/constant';
import {getTopNewCoursesService, getTopSellCoursesService} from '../core/services/course-services';

const getTopNewCourses = dispatch => {
    dispatch({type: constants.dispatchTypes.CoursesRequest});
    getTopNewCoursesService().then(res => {
        if (res.status === 200) {
            dispatch({type: constants.dispatchTypes.GetTopNewSuccess,
            data: res.data})
        } else {
            dispatch({type: constants.dispatchTypes.GetTopNewFailure,
            data: {
                message: "Lỗi khi tải khóa học"
            }})
        }
    }).catch(err => {
        dispatch({type: constants.dispatchTypes.GetTopNewFailure,
        data: {
            message: err.response.message
        }})
    })
}

const getTopSellCourses = dispatch => {
    dispatch({type: constants.dispatchTypes.CoursesRequest});
    getTopSellCoursesService().then(res => {
        if (res.status === 200) {
            dispatch({type: constants.dispatchTypes.GetTopSellSuccess,
            data: action.data.payload});
        } else {
            dispatch({type: constants.dispatchTypes.GetTopSellFailure,
            data: {
                message: "Lỗi khi tải khóa học"
            }})
        }
    }).catch(err => {
        dispatch({type: constants.dispatchTypes.GetTopSellFailure,
        data: {
            message: err.response.message
        }})
    })
}

export {getTopSellCourses, getTopNewCourses}