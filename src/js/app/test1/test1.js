define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Template
    var tpl = require('text!app/test1/tpl/test1.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'test',

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());
			
			return this;
		}
	});

});