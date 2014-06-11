define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Gmap = require('libs/gmap');

	// Template
    var template = _.template($('#tpl').html()); // Kept in index.html
	
	return Backbone.View.extend({
		className: 'map',

		initialize: function() {
			this.$el.html(template());
		},

		render: function() {
			Gmap.init(this.$('#map_holder'));

			navigator.geolocation.getCurrentPosition(function(position) {
				Gmap.updateCenter(position);
			},
			function() {
				console.log("Error");
			});
			
			return this;
		}
	});

});