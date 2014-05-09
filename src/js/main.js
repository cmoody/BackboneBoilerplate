require.config({
	paths: {
	 	'jquery': 'vendor/jquery/dist/jquery.min',
	    'backbone': 'vendor/backbone/backbone',
	    'underscore': 'vendor/underscore/underscore',
	    'hammerjs': 'vendor/hammerjs/hammer.min',
	    'hammer-jquery': 'vendor/jquery-hammerjs/jquery.hammer.min',
        'text' : 'vendor/requirejs-text/text',
	    'app': 'app',
        'libs': 'libs'
    },
	shim: {}
});

require([
	'app/router'
], function(Router) {

	var appRouter = new Router();
	Backbone.history.start();

});