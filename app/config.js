const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtExpiration: process.env.JWT_EXPIRATION,
  jwtRefreshTokenSecret: process.env.JWT_SECRET_KEY_REFRESH_TOKEN,
  jwtRefreshTokenExpiration: process.env.JWT_EXPIRATION_REFRESH_TOKEN,
  jwtSecret: 'jwtSecret',
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};
