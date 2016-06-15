'use strict';

app.controller('AccountCtrl', function($scope, Auth) {

  $scope.logout = function() {
    console.log("Logout button was clicked")
    Auth.logout();
  }
});
