var routes = require("./parsers");
var data = {
	a: 'pippo',
	min: 1,
	max: 2,
};

var keys = Object.keys(routes);
keys = ['second', 'xxx'];

keys.forEach((key) => {
	var f = routes[key]|| routes.default;
	f(data);
});