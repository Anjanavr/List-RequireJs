define(["users"], function(User) {
	function add() {	
		var name = document.getElementById('name').value;
		var users = JSON.parse(localStorage.users);
		users.push(new User(name));
		localStorage.users = JSON.stringify(users);
		console.log(localStorage.users);
		require(["ListController"], function(ListController) {
			ListController.start();
		});	
	}
});