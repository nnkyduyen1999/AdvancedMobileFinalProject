import axios from "axios";
import constants from "../../globals/constant";

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

module.exports.getRecommendCoursesService = (idUser, token) => {
  const limit = 10;
  const offset = 1;
  return axios.get(
    `${constants.API_LINK}/user/recommend-course/${idUser}/${limit}/${offset}`,
    {
      header: { Authorization: `Bearer ${token}` },
    }
  );
};

module.exports.getFavoriteCoursesService = (token) => {
  return axios.get(`${constants.API_LINK}/user/get-favorite-courses`, {
    header: { Authorization: `Bearer ${token}` },
  });
};

module.exports.getProcessCoursesService = (token) => {
  return axios.get(`${constants.API_LINK}/user/get-process-courses`, {
    header: { Authorization: `Bearer ${token}` },
  });
};

module.exports.getCategoryService = () => {
  return axios.get(`${constants.API_LINK}/category/all`);
};

module.exports.getCourseDetailService = (idCourse, idUser, token) => {
  return axios.get(
    `${constants.API_LINK}/course/get-course-detail/${idCourse}/${idUser}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

module.exports.likeCourse = (idCourse) => {
  return axios.post(`${constants.API_LINK}/user/like-course`, {
    courseId: idCourse,
  });
};


