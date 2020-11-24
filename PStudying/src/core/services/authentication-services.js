module.exports.login = (username, password) => {
  if (username === "admin") {
    if (password === "12345") {
      return {
        statusCode: 200,
        user: { username, token: "abc", fullName: "administrator" },
      };
    } else {
      return { statusCode: 404, errString: "Invalid username or password" };
    }
  }
  return { statusCode: 404, errString: "Not existed username" };
};
