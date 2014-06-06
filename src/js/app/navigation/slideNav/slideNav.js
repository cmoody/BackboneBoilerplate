define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Template
    var tpl = require('text!app/navigation/slideNav/tpl/nav.html');
    var template = _.template(tpl);

    var $body = $('body');

    return Backbone.View.extend({

        className: 'slide-nav',

        events: {

        },

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(template());

            return this;
        }

    });

});