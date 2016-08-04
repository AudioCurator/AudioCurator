
//MODEL: communicates to controller

/*Setup mainServ.js by associating app name using .module method, and passing service name to .service method.
Use function argument to inject in $http method*/

/*A service is essentially a Constructor function,
So when creating function variables, be sure to use the 'this' keyword. */


angular.module("AudioCurator").service("mainServ", function($http) {

	this.userName = "chalice";
	this.clientId = '93b670379c03c10be221ed90ee118f93';
  this.clientSecret = '87b74a7dd855b8cb9ec10a533be05848';

	this.postBlog = function(newPost){
		var today = "[" + new Date().toISOString().slice(0, 10) + "] - " + new Date().toISOString().slice(11, 19);
		var worddate = (new Date()).toString().slice(4, 15);
	  	var post = {
	  		body: newPost,
	  		date: today,
	  		displaydate: worddate
	  	};
	  	console.log(post);
	  	return $http({
	  		method: "POST",
	  		url: "/post",
	  		data: post
	  	}).then(function(res){
	  		console.log(res);
	  		return res.data.body;
	  	})

	};

	this.getPosts = function() {

	  	return $http({
			method: "GET",
			url: "/post"
		}).then(function(res){
			console.log(res.data);
			return res.data;
		})

	};

	this.remove = function(id) {
		return $http({
			method: "DELETE",
			url:"/post/" + id
		}).then(function(res){
			console.log(res.data);
			return res.data;
		})
	};

	this.update = function(post) {
		return $http({
			method: "PUT",
			url:"/post/" + post._id,
			data: post
		}).then(function(res){
			console.log(res.data);
			return res.data;
		})
	};


	// These user related functions are commented because they are not in use, but the endpoints have been setup for them to work if we need them.

	// this.getUser = function (user) {
	//   return $http ({
	//     method: "GET",
	//     url: '/user/me'
	//   }).then(function (response) {
	//     console.log('passportService.getUser', response.data);
	//     return response.data;
	//   });
	// };
	// this.getUsers = function () {
	//   return $http ({
	//     method: "GET",
	//     url: '/user'
	//   }).then(function (response){
	//     return response.data;
	//   });
	// };
	// this.changeUser = function (user) {
	//   return $http ({
	//     method: "PUT",
	//     url: '/user/' + user._id,
	//     data: user
	//   }).then(function (response) {
	//     console.log(response);
	//     return response.data;
	//   });
	// };
	// this.deleteUser = function (user) {
	//   return $http ({
	//     method: "DELETE",
	//     url: '/user/' + user._id,
	//   }).then(function (response) {
	//     return response.data;
	//   });
	// };

});
