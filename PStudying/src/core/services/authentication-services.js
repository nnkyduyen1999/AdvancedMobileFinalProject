import axios from 'axios';
import constants from '../../globals/constant';

module.exports.loginService = (email, password) => {
  const req = axios.post(`${constants.API_LINK}/user/login`, {
    email: email,
    password: password,
  });
  return req;
};

module.exports.register = (username, email, phone, password) => {
  if (username === "admin" || email === "admin@example.com") {
    return { statusCode: 400, errString: "Existed username or email" };
  }
  return { statusCode: 200, userInfo: { username, email, password, phone } };
};

module.exports.verifyEmail = (token) => {
  if (token === "00000") {
    return { statusCode: 200, access_token: token };
  }
  return { statusCode: 400, errString: "Invalid token" };
};

module.exports.forgetPassword = (email) => {
  if (email === `admin@gmail.com`) {
    return { statusCode: 200 };
  }
  return { statusCode: 400, errString: "Unregistered email" };
};
