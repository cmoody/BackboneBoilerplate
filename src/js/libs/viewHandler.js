define(function(require) {

  	"use strict";

  	var $ = require('jquery');
  	var Backbone = require('backbone');
  	var $content = $(".content");
  	var currentView;

	Backbone.View.prototype.close = function(){
		this.remove();
		this.unbind();
		if (this.onClose){
		  this.onClose();
		}
	};

	Backbone.View.prototype.onEnter = function() {

	};

	Backbone.View.prototype.onExit = function() {
		// this.pageTransition.out
	};

	Backbone.View.prototype.pageTransition = {
      'in': '',
      'out': '',
      'inReverse': '',
      'outReverse': ''
    };

  	var ViewHandler = {

  		setCurrent: function(view) {
  			// Call property on view for in/out
  			// currentView.onExit then on complete close
  			// view.onEnter
			if (currentView){
				currentView.close();
			}

		  	currentView = view;

		  	$content.html(currentView.$el);
		}
	}

	return ViewHandler;

});