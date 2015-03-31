define(function() {
	function render(data) {
		console.log(data, "listview");
		var users = data.users;
		var insertHTMl = '<ul>';
		for(var i=0; i<users.length; i++) {
			insertHTMl += '<li>' + users[i].name + '</li>';
		}
		insertHTMl += '</ul>';
		document.getElementById('container').innerHTML = insertHTMl;
	}
	return {
		render:render
	};
});