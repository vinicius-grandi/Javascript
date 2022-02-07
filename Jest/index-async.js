const axios = require('axios');

function callAfter2sec(param,callback) {
  setTimeout(function(){
    callback(param)
  }, 2000)
}

function getSuel() {
  return axios.get('http://api.deezer.com//artist/238486')
}

module.exports = {
  callAfter2sec,
  getSuel
}