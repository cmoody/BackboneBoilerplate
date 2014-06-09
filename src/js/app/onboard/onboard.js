define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Onboard = require('libs/onboard');

	// Template
    var tpl = require('text!app/onboard/tpl/index.html');
    var template = _.template(tpl);

	// Sub-Views

	return Backbone.View.extend({
		className: 'onboard',

		events: {
			'tap .overlay': 'removeOverlay',
			'tap .btn-become-a-fan': 'showSignUpOptions',
			'tap .btn-start-a-band': function(e) {
				this.isBand = true;
				this.showSignUpOptions(e);
			},
			'tap .btn-login': 'showLoginForm',
			'tap .sign-up-email': 'showEmailForm',
			'tap .verify-sign-up': 'verifySignUp',
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

		removeOverlay: function() {
			this.$el
				.find('.overlay')
				.hide()
				.removeClass('acitve')
				.end()
				.find('.sign-up-group')
				.removeClass('active');
		},

		goBack: function() {
			this.$el
				.find('.current')
				.removeClass('current')
				.end()
				.find('.options')
				.addClass('current');
		},

		showSignUpOptions: function() {
			this.$el
				.find('.sign-up-group') // Move each to a reference for less use of find
				.addClass('active')
				.end()
				.find('.overlay')
				.show()
				.addClass('active');
		},

		showEmailForm: function() {
			var that = this;

			this.$el
				.find('.current')
				.removeClass('current')
				.end()
				.find('.create-email')
				.addClass('current');

			setTimeout(function() {
				that.removeOverlay();
			}, 500);
		},

		showLoginForm: function() {
			this.$el
				.find('.current')
				.removeClass('current')
				.end()
				.find('.login') // Reuse for passing in classes
				.addClass('current');
		},

		verifySignUp: function(e) {
			e.preventDefault();

			//var username = $('#username').val();
			var email = $('#email').val();
			var password = $('#password').val();
			var $error = $('.error');
			// Do verification and send info but for now just redirect
			if(this.isBand) {
				console.log("Go to band part");
			}else{
				Onboard.signup(email, password,
					function(user) {
						window.location.hash = "home";
					},
					function(user, error) {
						$error.html(error.message);
					}
				);
			}
		},

		verifyLogin: function() {
			var username = $('#username-login').val();
			var password = $('#password-login').val();

			Onboard.login(username,password, function() {
				window.location.hash = "home";
			});
		}
	});

});