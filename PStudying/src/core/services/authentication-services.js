import axios from 'axios';
import constants from '../../globals/constant';

module.exports.loginService = (email, password) => {
  const req = axios.post(`${constants.API_LINK}/user/login`, {
    email: email,
    password: password,
  });
  return req;
};

module.exports.registerService = (username, email, phone, password) => {
  var req = axios.post(`${constants.API_LINK}/user/register`, {
    username: username,
    email: email,
    phone: phone,
    password: password,
  });
  return req;
};

module.exports.verifyEmail = (token) => {
  if (token === "00000") {
    return { statusCode: 200, access_token: token };
  }
  return { statusCode: 400, errString: "Invalid token" };
};

module.exports.forgetPasswordService = (email) => {
  return axios.post(`${constants.API_LINK}/user/forget-pass/send-email`,
  {
    email: email
  });
}
