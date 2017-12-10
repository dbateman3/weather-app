const yargs = require("yargs");
const geocode = require("./geocode/geocode.js");
const request = require("request");

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to get weather',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;


geocode.geocodeAddress(argv.address, function(errorMessage, results) {
	if (errorMessage) {
		console.log(errorMessage);

	} else {
		console.log(JSON.stringify(results, undefined, 2));
	}
});

// https://api.darksky.net/forecast/2df076a676988d220ee69dd45e020547/37.8267,-122.4233

request({
	url: 'https://api.darksky.net/forecast/2df076a676988d220ee69dd45e020547/37.8267,-122.4233',
	json: true,
	}, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log(body.currently.temperature);
		} else {
			console.log('Unable to get weather');
		}
});