import axios from "axios";
import constants from "../../globals/constant";

module.exports.getCatalogCoursesService = (idCat) => {
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
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

module.exports.getFavoriteCoursesService = (token) => {
  return axios.get(`${constants.API_LINK}/user/get-favorite-courses`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

module.exports.getProcessCoursesService = (token) => {
  return axios.get(`${constants.API_LINK}/user/get-process-courses`, {
    headers: { Authorization: `Bearer ${token}` },
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

module.exports.likeCourseService = (idCourse, token) => {
  return axios.post(
    `${constants.API_LINK}/user/like-course`,
    {
      courseId: idCourse,
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
};

module.exports.getCourseLikedStatusService = (idCourse, token) => {
  return axios.get(
    `${constants.API_LINK}/user/get-course-like-status/${idCourse}`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
};

module.exports.subscribeCourseService = (idCourse, token) => {
  return axios.post(
    `${constants.API_LINK}/payment/get-free-courses`,
    {
      courseId: idCourse
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
}