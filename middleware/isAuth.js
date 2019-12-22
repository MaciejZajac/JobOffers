const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(" ")[1];
  let decodedToken = "";
  try {
    decodedToken = jwt.verify(token, keys.SECRET_TOKEN);
  } catch (err) {
    req.isAuth = false;
    next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    next();
  }
  req.userId = decodedToken.userId;
  req.isAuth = true;
  next();
};
