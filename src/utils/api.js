var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '9bbd7f9b1229af1';

module.exports = window.api = {
  get : function(url){
    return fetch(rootUrl + url, {
      headers:{
        'Authorization' : 'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      return response.json()
    })
  }
};