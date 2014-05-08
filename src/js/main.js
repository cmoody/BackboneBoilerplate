require.config({
	baseUrl: 'js/vendor',
	paths: {
	 	'jquery': 'jquery/dist/jquery.min',
	    'backbone': 'backbone/backbone',
	    'underscore': 'underscore/underscore',
	    'hammerjs': 'hammerjs/hammer.min',
	    'hammer-jquery': 'jquery-hammerjs/jquery.hammer.min',
        "text" : "requirejs-text/text",
	    'app': '../app',
        'libs': '../libs'
    },
	shim: {

	}
});

require([
	'app/router'
], function(Router) {

	var appRouter = new Router();
	Backbone.history.start();

});