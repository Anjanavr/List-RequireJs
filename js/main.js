require(["users", "ListController"], function(User, ListController) {
	var user = [ new User('a'),
				 new User('b'),
				 new User('c')
			   ];
	for(var i=0; i<user.length; i++) {
		console.log(user[i].name);
	}
	localStorage.users = JSON.stringify(user);
	ListController.start();
});