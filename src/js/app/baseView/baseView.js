define(function(require) {
	"use strict";

	// Libs
	//var $ = require('jquery');
	var Backbone = require('backbone');
	
	return Backbone.View.extend({
		title: '',

		setTitle: function() {
			stateEvents.trigger("update:title", this.title);
		}
	});

});


// var Pannel = function (options) {

	// Maybe try calling this.setTitle() here?

//     // put all of Panel's initialization code here
//     console.log('Pannel initialized');
//     this.foo = 'bar';

//     Backbone.View.apply(this, [options]);
// };

// _.extend(Pannel.prototype, Backbone.View.prototype, {

//     // put all of Panel's methods here. For example:
//     sayHi: function () {
//         console.log('hello from Pannel');
//     }
// });

// Pannel.extend = Backbone.View.extend;


// // other classes inherit from Panel like this:
// var PannelAdvanced = Pannel.extend({

//     initialize: function (options) {
//         console.log('PannelAdvanced initialized');
//         console.log(this.foo);
//     }
// });

// var pannelAdvanced = new PannelAdvanced(); //Log: Pannel initialized, PannelAdvanced initialized, bar
// pannelAdvanced.sayHi(); // Log: hello from Pannel