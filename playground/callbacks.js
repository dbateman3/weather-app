let getUser = function(id, callback) {
	let user = {
		id: id,
		name: 'Dan'
	};
	setTimeout(function() {
		callback(user);
	}, 3000);
};

getUser(2, function(user) {
	console.log(user);
});