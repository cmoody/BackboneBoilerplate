define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Template
    var tpl = require('text!app/header/tpl/nav.html');
    var template = _.template(tpl);

    var $body = $('body');

    return Backbone.View.extend({

        tagName: 'header',

        className: 'bar bar-nav',

        events: {
            'tap .navbtn': 'navSlide',
            'tap .list a': 'navSlide',
            'tap .nav-closer': 'navSlide'
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

// Put in own view
// <div class="nav transition">
//     <div class="profile">
//         <div class="portrait">
//             <img src="assets/img/portrait_placeholder.png" alt="">
//         </div>
//         <h1>Chase Moody</h1>
//     </div>
//     <ul class="list">
//         <li>
//             <a href="#">Home</a>
//         </li>
//         <li>
//             <a href="#test1">Test 1</a>
//         </li>
//     </ul>
// </div>

// <div class="nav-closer"></div>
