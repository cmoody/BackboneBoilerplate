require.config({
	paths: {
	 	'jquery': 'vendor/jquery/dist/jquery.min',
	    'backbone': 'vendor/backbone/backbone',
	    'underscore': 'vendor/underscore/underscore',
<<<<<<< HEAD
	    'hammerjs': 'vendor/jquery-hammerjs/jquery.hammer-full.min',
	    'velocity': 'vendor/velocity/jquery.velocity.min',
=======
	    'hammerjs': 'vendor/hammerjs/hammer.min',
	    'hammer-jquery': 'vendor/jquery-hammerjs/jquery.hammer.min',
>>>>>>> parent of 2159fa6... integrate hammerjs
        'text' : 'vendor/requirejs-text/text',
	    'app': 'app',
        'libs': 'libs'
    },
	shim: {
		'velocity': ['jquery']
	}
});

require([
<<<<<<< HEAD
	'app/router',
	'velocity',
	'libs/delegateEvents'
=======
	'app/router'
>>>>>>> parent of 2159fa6... integrate hammerjs
], function(Router) {

	var appRouter = new Router();
	Backbone.history.start();

});