define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Template
    var tpl = require('text!app/home/tpl/home.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'home',

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());
			
			return this;
		}
	});

});