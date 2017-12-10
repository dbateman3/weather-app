const yargs = require("yargs");
const geocode = require("./geocode/geocode.js");

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