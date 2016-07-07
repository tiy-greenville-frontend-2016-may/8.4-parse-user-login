var $ = window.jQuery = require('jquery');

var User = require('./models/user').User;

/*
 * Provided needed headers for parse server
 */
$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
  }
});

$('#signup').on('submit', function(e){
  e.preventDefault();
  var email = $('#email').val();
  var password = $('#password').val();

  var newUser = new User();
  newUser.set({'username': email, 'password': password});

  console.log(newUser);

  newUser.save();
});

$('#login').on('submit', function(e){
  e.preventDefault();
  var email = $('#email-login').val();
  var password = $('#password-login').val();

  var loggedInUser = User.login(email, password);

  loggedInUser.done(function(response){
    console.log(response);
  }).failure(function(err){
    console.log(err);
  });
});
