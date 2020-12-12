import axios from "axios";
import constants from "../../globals/constant";

module.exports.updateInfo = (name, phone) => {
  return {
    statusCode: 200,
    userInfo: {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      email: "string",
      avatar: `https://i.guim.co.uk/img/media/c9b0aad22638133aa06cd68347bed2390b555e63/0_477_2945_1767/master/2945.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=97bf92d90f51da7067d00f8156512925`,
      name: name,
      favoriteCategories: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
      phone: phone,
      type: "STUDENT",
      isDeleted: true,
      isActivated: true,
      createdAt: "2020-11-27T15:08:24.394Z",
      updatedAt: "2020-11-27T15:08:24.394Z",
    },
  };
};

module.exports.updateProfileService = (name, avatar, phone, token) => {
  const req = axios.put(
    `${constants.API_LINK}/user/update-profile`,
    {
      name: name,
      avatar: avatar,
      phone: phone,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return req;
};
