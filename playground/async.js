console.log('Starting app');

//async call, first is callback func then time in milliseconds
//non-blocking example
setTimeout(function() {
	console.log('Inside of callback');
}, 2000);

setTimeout(function() {
	console.log('second callback');
}, 0);

console.log('Ending app');