define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Template
    var tpl = require('text!app/navTop/tpl/nav.html');
    var template = _.template(tpl);

    var $body = $('body');

    return Backbone.View.extend({

        tagName: 'nav',

        className: '',

        events: {
            'click .navbtn': 'navSlide',
            'click .list a': 'navSlide'
        },

        initialize: function() {
            // Trigger for updating title
            stateEvents.on("update:title", function(title) {
                this.$el.find('.title').html(title);
            }, this);

            this.render();
        },

    	render: function() {
            this.$el.html(template());

            return this;
    	},
        navSlide: function() {
            // Add in overlay to close on body click
            // Look into sliding this closed
            $body.toggleClass('open');
        },

    });

});