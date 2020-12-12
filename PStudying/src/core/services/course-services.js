import axios from 'axios';
import constants from '../../globals/constant';

module.exports.likeCourse = (id) => {
    return { statusCode: 200, likeStatus: true, message: "Course added to favorite" }
}
module.exports.getRecommendedCourse = () => {
    const recommendedCourses = [
        {
          id: "1",
          name: "React Native recommended",
          author: "Hai Pham",
          level: "Advanced",
          released: "May 2019",
          duration: "40h",
        },
        {
          id: "2",
          name: "React recommended",
          author: "Khanh Nguyen",
          level: "Advanced",
          released: "May 2019",
          duration: "60h",
        },
        {
          id: "3",
          name: "Test recommended",
          author: "Hanh Tran",
          level: "Beginner",
          released: "May 2019",
          duration: "45h",
        },
        {
          id: "4",
          name: "React Native 2 recommended",
          author: "Hai Pham",
          level: "Advanced",
          released: "May 2019",
          duration: "40h",
        },
        {
          id: "5",
          name: "React 2 recommended",
          author: "Khanh Nguyen",
          level: "Advanced",
          released: "May 2019",
          duration: "60h",
        },
        {
          id: "6",
          name: "Test 2 recommended",
          author: "Hanh Tran",
          level: "Beginner",
          released: "May 2019",
          duration: "45h",
        },
      ];
    return recommendedCourses;
}

module.exports.newCourses = () => {
    const newCourses = [
        {
          id: "1",
          name: "React Native new",
          author: "Hai Pham",
          level: "Advanced",
          released: "May 2019",
          duration: "40h",
        },
        {
          id: "2",
          name: "React new",
          author: "Khanh Nguyen",
          level: "Advanced",
          released: "May 2019",
          duration: "60h",
        },
        {
          id: "3",
          name: "Test new",
          author: "Hanh Tran",
          level: "Beginner",
          released: "May 2019",
          duration: "45h",
        },
        {
          id: "4",
          name: "React Native 2 new",
          author: "Hai Pham",
          level: "Advanced",
          released: "May 2019",
          duration: "40h",
        },
        {
          id: "5",
          name: "React 2 new",
          author: "Khanh Nguyen",
          level: "Advanced",
          released: "May 2019",
          duration: "60h",
        },
        {
          id: "6",
          name: "Test 2 new",
          author: "Hanh Tran",
          level: "Beginner",
          released: "May 2019",
          duration: "45h",
        },
      ];
      return newCourses;
}
module.exports.getCatalogCourses = (idCat) => {
    const coursesByCategory = [];
    return coursesByCategory;
}

module.exports.getTopNewCoursesService = () => {
  const req = axios.post(`${constants.API_LINK}/course/top-new`,{
    "limit": 10,
    "page": 1
  });
  return req;
}

module.exports.getTopSellCoursesService = () => {
  return axios.post(`${constants.API_LINK}/course/top-sell`, {
    "limit": 10,
    "page": 1
  });
}

module.exports.getTopRateCoursesService = () => {
  return axios.post(`${constants.API_LINK}/course/top-rate`, {
    "limit": 5,
    "page": 1
  });
}

