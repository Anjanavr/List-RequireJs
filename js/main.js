require(["users", "ListController"], function(User, ListController) {
	var user = [ new User('anu'),
				 new User('bini'),
				 new User('charlie')
			   ];
	for(var i=0; i<user.length; i++) {
		console.log(user[i].name);
	}
	localStorage.users = JSON.stringify(user);
	ListController.start();
});