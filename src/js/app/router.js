define(function(require) {

  "use strict";

  // Libs
  var $ = require('jquery');
  var Backbone = require('backbone');
  var ViewHandler = require('libs/viewHandler');
  var stateEvents = require('libs/stateEvents');

  // Main Container
  var $body = $("body");
  var $content = $(".content");
  
  // Collections

  // Views
  var NavTopView = require('app/navTop/navTop');
  var HomeView = require('app/home/home');

  var Test1View = require('app/test1/test1');
    
  return Backbone.Router.extend({

    routes: {
		  '': 'index',
      '/': 'index',
      'test1': 'test1'
    },

    initialize: function() {
      this.addTopNav(); // If Auth needed move into viewHandler
    },

    addTopNav: function() {
      var navTopView = new NavTopView();

      $body
        .prepend(navTopView.$el);
    },

    index: function() {
      var homeView = new HomeView();

      stateEvents.trigger("update:title", "Home");

      ViewHandler.setCurrent(homeView);
    },

    test1: function() {
      var test1View = new Test1View();

      stateEvents.trigger("update:title", "Test 1");

      ViewHandler.setCurrent(test1View);
    }

  });

});