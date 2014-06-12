define(function(require) {
	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Libs
	//var Onboard = require('libs/onboardLib');
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
			console.log("Submit Login");

			stateEvents.trigger("isLoggedIn");

			window.location = '#';
		},

		verifySignUp: function() {
			console.log("Submit Sign Up");

			stateEvents.trigger("isLoggedIn");

			window.location = '#';
		}

	});

});