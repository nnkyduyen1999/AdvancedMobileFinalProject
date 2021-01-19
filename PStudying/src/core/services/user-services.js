import axios from "axios";
import constants from "../../globals/constant";

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

module.exports.getSearchHistoryService = (token) => {
  return axios.get(`${constants.API_LINK}/course/search-history`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}
