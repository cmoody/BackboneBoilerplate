define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Gmap = require('libs/gmap');
	var stateEvents = require('libs/stateEvents');

	// Template
    var template = _.template($('#tpl').html()); // Kept in index.html
	
	return Backbone.View.extend({
		className: 'map',

		initialize: function() {
			//stateEvents.trigger("change:navigation:secondary");
			// Destroy on route change?
			// Alternative is to position element in corner so click event is on this view

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