const jwt = require("jsonwebtoken");

function generateToken(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
  return token;
}
module.exports = generateToken;
