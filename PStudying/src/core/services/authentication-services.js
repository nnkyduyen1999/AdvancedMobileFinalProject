module.exports.login = (username, password) => {
  if (username === "admin") {
    if (password === "12345") {
      return {
        statusCode: 200,
        message: "OK",
        userInfo: {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          email: "admin@example.com",
          avatar:
            "https://i.pinimg.com/originals/3c/77/7a/3c777af381c043c928cc6beaef2dd102.jpg",
          name: "administrator",
          favoriteCategories: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
          phone: "012345678",
          type: "STUDENT",
          isDeleted: true,
          isActivated: true,
          createdAt: "2020-11-26T07:57:44.411Z",
          updatedAt: "2020-11-26T07:57:44.411Z",
        },
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjU4YTZiZDE0LTcwODAtNGVkZi1hZGFkLTFjNjUxZWVhMmU1ZCIsImlhdCI6MTU4Njg2MDkyOSwiZXhwIjoxNTg2ODY0NTI5fQ.kduaY0rcYg6iLoyjXjDRtczMCW8pl16d1NSGMM2C83M",
      };
    }
  } else {
    return { statusCode: 404, errString: "Invalid username or password" };
  }
  return { statusCode: 404, errString: "Not existed username" };
};

module.exports.register = (username, email, phone, password) => {
  if (username === "admin" || email === "admin@example.com") {
    return { statusCode: 400, errString: "Existed username or email" };
  }
  return { statusCode: 200, userInfo: { username, email, password, phone } };
};

module.exports.verifyEmail = (token) => {
  if (token === "00000") {
    return { statusCode: 200, access_token: token}
  }
  return { statusCode: 400, errString: "Invalid token"}
}

module.exports.forgetPassword = (email) => {
  if (email === `admin@gmail.com`) {
    return { statusCode: 200 }
  }
  return { statusCode: 400, errString: "Unregistered email" };
}
