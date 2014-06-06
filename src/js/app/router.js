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
  var HeaderView = require('app/navigation/header/header');
  var FooterView = require('app/navigation/footer/footer');
  var SlideNavView = require('app/navigation/slideNav/slideNav');

  var HomeView = require('app/home/home');

  // Test Views
  var Test1View = require('app/test1/test1');
  var SubHeaderTestView = require('app/subHeaderTest/subHeaderTest');
    
  return Backbone.Router.extend({

    routes: {
		  '': 'index',
      '/': 'index',
      'test1': 'test1',
      'subheadertest': 'subHeaderTest'
    },

    initialize: function() {
      this.addHeader(); // If Auth needed move into viewHandler
      this.addFooter();
      this.addSlideNav();
    },

    addHeader: function() {
      var headerView = new HeaderView();

      $body
        .prepend(headerView.$el);
    },

    addFooter: function() {
      var footerView = new FooterView();

      $body
        .prepend(footerView.$el);
    },

    addSlideNav: function() {
      var slideNavView = new SlideNavView();

      $body
        .prepend(slideNavView.$el);
    },

    index: function() {
      var homeView = new HomeView();

      stateEvents.trigger("update:title", "Home"); // Maybe move into ViewHandler?

      ViewHandler.setCurrent(homeView);
    },

    test1: function() {
      var test1View = new Test1View();

      stateEvents.trigger("update:title", "Test 1");

      ViewHandler.setCurrent(test1View);
    },

    subHeaderTest: function() {
      var subHeaderTestView = new SubHeaderTestView();

      stateEvents.trigger("update:title", "SubHeader Test");

      ViewHandler.setCurrent(subHeaderTestView);
    }

  });

});