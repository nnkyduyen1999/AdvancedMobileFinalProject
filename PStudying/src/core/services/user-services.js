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


