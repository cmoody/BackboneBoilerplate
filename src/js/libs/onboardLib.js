define(function(require) {

  "use strict";

  //var Parse = require('parse');
  var stateEvents = require('libs/stateEvents');
  //Parse.initialize("", "");

  var onboard = {
  	signup: function(username, password, callback, errorCallback) {
      console.log(username + ' ' + password);

      callback();

      // if(err) {
      //   errorCallback();
      // }
      
		  // Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
    //     success: function(user) {
    //       callback(user);
    //     },

    //     error: function(user, error) {
    //     	errorCallback(user, error);
    //     }
    //   });
  	},

  	login: function(username, password, callback) {
      console.log(username + ' ' + password);

      callback();
  		// Parse.User.logIn(username,password, {
  		//   success: function(user) {
  		//     // Do stuff after successful login.
    //       stateEvents.trigger("isLoggedIn");
  		//     callback();
  		//   },
  		//   error: function(user, error) {
  		//     // The login failed. Check error to see why.
  		//     console.log("Error: " + error.code + " " + error.message);
  		//   }
		  // });
  	},

  	signupFacebook: function() {

  	},

  	loginFacebook: function() {

  	},

  	getCurrentUser: function() {
      
  	},

  	logOut: function() {
  		//Parse.User.logOut();
  	},

    onError: function() {

    }
  };

  return onboard;

});