const dotenv = require('dotenv');

class EnvCOnfiguration {
  static load(){
    console.log("--------BEFORE-------");
    console.log(process.env.ASSET_HOST);
    console.log(process.env.NODE_ENV);
    dotenv.config({path: `.env.${process.env.NODE_ENV}`});
    console.log("--------AFTER-------");
    console.log(process.env.ASSET_HOST);
    console.log(process.env.NODE_ENV);
  }
}

module.exports = EnvCOnfiguration;