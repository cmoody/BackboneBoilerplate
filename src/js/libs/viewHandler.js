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

  	var ViewHandler = {

  		setCurrent: function(view) {

			if (currentView){
				currentView.close();
			}

		  	currentView = view;

		  	$content.html(currentView.$el);
		}
	}

	return ViewHandler;

});