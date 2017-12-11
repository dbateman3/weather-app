let asyncAdd = function(x, y) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			if (typeof x === 'number' && typeof y === 'number') {
				resolve(x + y);
			} else {
				reject('Arguments must be numbers');
			}
		}, 1500);
	});
};

// let somePromise = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		//resolve('It worked');
// 		reject('Error');
// 	}, 2500);
	
// });

// somePromise.then(function(message) {
// 	console.log('Success: ' + message);
// }, (function(errorMessage) {
// 	console.log('Error: ' + errorMessage);
// }));

asyncAdd(2, 3).then(function(result) {
	console.log(`Result: ${result}`);
	return asyncAdd(result, 3);
}).then(function(newResult) {
	console.log(`New Result: ${newResult}`);
}).catch(function(errorMessage) {
	console.log(errorMessage);
});

//error fires for all promises instead of catching each one and specifying 
//a different error handler

