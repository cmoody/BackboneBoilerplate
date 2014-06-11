define(function(require) {

  "use strict";

  // Vendor
  var $ = require('jquery');
  var Backbone = require('backbone');

  // Libs
  var ViewHandler = require('libs/viewHandler');

  // Elements
  var $body = $("body");
  var $content = $(".content");
  
  // Collections

  // Navigation Views
  var HeaderView = require('app/navigation/header/header');
  var FooterView = require('app/navigation/footer/footer');
  var SlideNavView = require('app/navigation/slideNav/slideNav');

  // Page Views
  var OnboardView = require('app/onboard/onboard');
  var HomeView = require('app/home/home');
  var MapView = require('app/map/map');

  // Test Views
  var Test1View = require('app/test1/test1');
  var SubHeaderTestView = require('app/subHeaderTest/subHeaderTest');
    
  return Backbone.Router.extend({

    routes: {
		  '': 'index',
      '/': 'index',
      'onboard': 'onboard',
      'map': 'map',
      'test1': 'test1',
      'subheadertest': 'subHeaderTest'
    },

    initialize: function() {
      this.addHeader();
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

    onboard: function() {
      var onboardView = new OnboardView();

      ViewHandler.setCurrent(onboardView);
    },

    index: function() {
      var homeView = new HomeView();

      ViewHandler.setCurrent(homeView, "Home");
    },

    map: function() {
      var mapView = new MapView();

      ViewHandler.setCurrent(mapView, "Map");
      mapView.render();
    },

    test1: function() {
      var test1View = new Test1View();

      ViewHandler.setCurrent(test1View, "Test 1");
    },

    subHeaderTest: function() {
      var subHeaderTestView = new SubHeaderTestView();

      ViewHandler.setCurrent(subHeaderTestView, "SubHeader Test");
    }

  });

});