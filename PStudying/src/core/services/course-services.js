import axios from "axios";
import constants from "../../globals/constant";

module.exports.likeCourse = (id) => {
  return {
    statusCode: 200,
    likeStatus: true,
    message: "Course added to favorite",
  };
};

module.exports.getCatalogCourses = (idCat) => {
  const coursesByCategory = [];
  return coursesByCategory;
};

module.exports.getTopNewCoursesService = () => {
  const req = axios.post(`${constants.API_LINK}/course/top-new`, {
    limit: 10,
    page: 1,
  });
  return req;
};

module.exports.getTopSellCoursesService = () => {
  return axios.post(`${constants.API_LINK}/course/top-sell`, {
    limit: 10,
    page: 1,
  });
};

module.exports.getTopRateCoursesService = () => {
  return axios.post(`${constants.API_LINK}/course/top-rate`, {
    limit: 5,
    page: 1,
  });
};

module.exports.getCourseDetailService = (idCourse, idUser, token) => {
  return axios.get(
    `${constants.API_LINK}/course/get-course-detail/${idCourse}/${idUser}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
