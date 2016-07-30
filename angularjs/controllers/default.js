exports.install = function() {
	framework.route('/*', view_app);
	framework.route('/round', view_round);
};

function view_app() {
	var self = this;
	self.view('round');
}

function view_round() {
	var self = this;
	self.view('round');
}