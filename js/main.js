requirejs.config ({
	"baseUrl" : "js" ,
	"paths" : {
		 "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
	}
}); 

require(["users", "ListController", "jquery"], function(User, ListController, $) {
	var user = [ new User('anu'),
				 new User('bini'),
				 new User('charlie')
			   ];
	for(var i=0; i<user.length; i++) {
		console.log(user[i].name);
	}
	localStorage.users = JSON.stringify(user);
	ListController.start();
	$('#app').css("color","blue");
	$('#container').css("color","green");
	console.log(($('#app').css("color")),"jqueryloaded");
});