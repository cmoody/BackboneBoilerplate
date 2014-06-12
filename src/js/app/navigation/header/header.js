define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Template
    var tpl = require('text!app/navigation/header/tpl/nav.html');
    var template = _.template(tpl);

    var $body = $('body');

    return Backbone.View.extend({

        tagName: 'header',

        className: 'bar bar-nav',

        events: {
            'tap .navbtn': 'navSlide',
            'tap .list a': 'navSlide'
        },

        initialize: function() {
            // Trigger for updating title
            stateEvents.on("update:title", function(title) {
                this.$el.find('.title').html(title);
            }, this);

            stateEvents.on("isLoggedIn", function() {
                this.$el.addClass('is-logged-in');
            }, this);

            this.render();
        },

        render: function() {
            this.$el.html(template());

            return this;
        },

        navSlide: function() {
            $body.toggleClass('open');
        }

    });

});