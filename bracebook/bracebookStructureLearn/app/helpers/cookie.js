function setCookie(res, name, value,age) {
  res.cookie(name, value,{ maxAge: 1000*60*60*24*age, httpOnly: true });
}

// Function for getting a cookie
function getCookie(req, name) {
  return req.cookies[name];
}

module.exports = {
  setCookie,
  getCookie,
};