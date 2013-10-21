(function (App) {
	App.populator('home', function (page) {
		// put stuff here
	});

	App.populator('selectBank', function (page) {
		// put stuff here
	});
	
	App.populator('submitPayment', function (page) {
		// put stuff here
	});
	
	App.populator('confirmed', function (page) {
		// put stuff here
	});
	
	try {
		App.restore();
	} catch (err) {
		App.load('home');
	}
})(App);
