define(function(require) {
	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Libs
	var Onboard = require('libs/onboardLib');
	var stateEvents = require('libs/stateEvents');

	// Template
    var tpl = require('text!app/onboard/tpl/index.html');
    var template = _.template(tpl);

	// On successful sign up or login run event to add logged in to body
	return Backbone.View.extend({
		className: 'onboard',

		events: {
			'tap .btn-login': 'loginPage',
			'tap .btn-sign-up': 'signUpPage',
			'tap .verify-login': 'verifyLogin',
			'tap .verify-sign-up': 'verifySignUp',
			'tap .verify-login-facebook': 'loginFacebook',
			'tap .verify-sign-up-facebook': 'signUpFacebook',
			'tap .back': 'goBack'
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());

			return this;
		},

		goBack: function() {
			this.$('.active').removeClass('active');
		},

		loginPage: function() {
			this.$('.login').addClass('active');
		},

		signUpPage: function() {
			this.$('.create-email').addClass('active');
		},

		verifyLogin: function() {
			var username = this.$('.username-login').val();
			var password = this.$('.password-login').val();

			if(username && password) {
				Onboard.login(username, password, function() {
					stateEvents.trigger("isLoggedIn");

					window.location = '#';
				});
			}else{
				console.log("Error");
			}
		},

		verifySignUp: function() {
			// Add validation
			var username = this.$('.username').val();
			var password = this.$('.password').val();

			Onboard.signup(username, password, function() {
				stateEvents.trigger("isLoggedIn");

				window.location = '#';
			},
			function() {
				console.log("Error");
			});
		},

		loginFacebook: function() {
			Onboard.loginFacebook(function() {
				stateEvents.trigger("isLoggedIn");

				window.location = '#';
			});
		},

		signUpFacebook: function() {
			Onboard.signupFacebook(function() {
				stateEvents.trigger("isLoggedIn");

				window.location = '#';
			});
		}

	});

});