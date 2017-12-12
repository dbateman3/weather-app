const yargs = require("yargs");
const geocode = require("./geocode/geocode.js");
const weather = require("./weather/weather.js");


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


geocode.geocodeAddress(argv.address, function(errorMessage, geoResults) {
	if (errorMessage) {
		console.log(errorMessage);

	} else {
		console.log(`Address: ${geoResults.address}`);
		weather.getWeather(geoResults.latitude, geoResults.longitude, function(errorMessage, weatherResults) {
		if (errorMessage) {
			console.log(errorMessage);
		} else {

			console.log(`It's currently ${weatherResults.temperature}` + '\u00B0' + 'F');
			console.log(`Conditions are ${weatherResults.conditions}`);
			console.log(`With windspeeds of ${weatherResults.windSpeed}mph`);
			console.log(`And a ${weatherResults.precipitation}% chance of precipitation.`);
		}
	});
	}
});

