const dotenv = require('dotenv');

class EnvCOnfiguration {
  static load(){
    dotenv.config({path: `.env.${process.env.NODE_ENV}`});
  }
}

module.exports = EnvCOnfiguration;