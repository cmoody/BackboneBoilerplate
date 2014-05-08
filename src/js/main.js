require.config({
	baseUrl: 'js/vendor',
	paths: {
	 	'jquery': 'jquery/dist/jquery.min',
	    'backbone': 'backbone/backbone',
	    'underscore': 'underscore/underscore',
	    'hammer': 'hammerjs/hammer.min',
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