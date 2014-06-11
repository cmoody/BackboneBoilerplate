require.config({
	paths: {
	 	'jquery': 'vendor/jquery/dist/jquery.min',
	    'backbone': 'vendor/backbone/backbone',
	    'underscore': 'vendor/underscore/underscore',
	    'hammerjs': 'vendor/jquery-hammerjs/jquery.hammer-full.min',
        'text' : 'vendor/requirejs-text/text',
        'parse': 'http://www.parsecdn.com/js/parse-1.2.18.min',
	    'app': 'app',
        'libs': 'libs'
    },
	shim: {}
});

require([
	'app/router',
	'libs/delegateEvents'
], function(Router) {
	var currentUser = true; // Replace with onboardLib.getCurrentUser();

	var appRouter = new Router();
	Backbone.history.start();

	if(currentUser) {
		// trigger event to add logged in

		appRouter.navigate('', true);
	}else{
		appRouter.navigate('onboard', true);

		// On error for parse sends user back to /onboard
		// $('body').addClass('is-logged-in');
	}

});