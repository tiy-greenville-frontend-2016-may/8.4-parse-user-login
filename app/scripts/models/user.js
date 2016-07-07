var Backbone = require('backbone');


var User = Backbone.Model.extend({
  urlRoot: 'https://tiny-parse-server.herokuapp.com/users'
},{
  login: function(username, password){
    var loggedInUser = new User();
    var queryString = 'username=' + username + '&password=' + password;
    loggedInUser.urlRoot = 'https://tiny-parse-server.herokuapp.com/login?' + queryString;
    return loggedInUser.fetch();
  }
});

module.exports = {
  'User': User
};
