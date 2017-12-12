const yargs = require('yargs');
const axios = require('axios');

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

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;


axios.get(geocodeUrl).then(function(response) {
	if (response.data.status === "ZERO_RESULTS") {
		throw new Error('Unable to find entered address');
	}
	let lat = response.data.results[0].geometry.location.lat;
	let lng = response.data.results[0].geometry.location.lng;
	let weatherUrl = `https://api.darksky.net/forecast/2df076a676988d220ee69dd45e020547/${lat},${lng}`;

	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);
}).then(function(response) {
	let temperature = response.data.currently.temperature;
	let apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch(function(e) {
	if (e.code === "ENOTFOUND") {
		console.log('Unable to connect to servers');
	} else {
		console.log(e.message);
	}
	
});