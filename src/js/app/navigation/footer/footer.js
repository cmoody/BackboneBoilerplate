define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Template
    var tpl = require('text!app/navigation/footer/tpl/nav.html');
    var template = _.template(tpl);

    var $body = $('body');

    return Backbone.View.extend({

        className: 'footer',

        events: {
            'tap .menu': 'openMenu',
            //'tap .tab-item': 'closeMenu'
        },

        initialize: function() {
            stateEvents.on("isLoggedIn", function() {
                this.$el.addClass('is-logged-in');
            }, this);
            
            this.render();
        },

        render: function() {
            this.$el.html(template());

            return this;
        },

        openMenu: function(e) {
            // e.preventDefault();
            // e.stopPropagation();
            // e.gesture.stopPropagation();
            // e.gesture.preventDefault();

            this.$el.toggleClass('open');
        },

        closeMenu: function(e) {
            stateEvents.trigger("change:navigation");
            // e.preventDefault();
            // e.stopPropagation();
            // e.gesture.stopPropagation();
            // e.gesture.preventDefault();

            this.$el.removeClass('open');
        }

    });

});