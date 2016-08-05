angular.module("AudioCurator").service("passportService", function($http){

  this.getUser = function (user) {
    return $http ({
      method: "GET",
      url: '/user/me'
    }).then(function (response) {
      console.log('passportService.getUser', response.data);
      return response.data;
    });
  };


  // These are commented because they are not in use.

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