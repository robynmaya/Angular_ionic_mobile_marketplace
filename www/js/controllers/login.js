'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth){
  $scope.emailLogin = function(){
    console.log('button was clicked on login');
    $scope.user = {};
    console.log('showing popup');

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: 'templates/partials/login.html',
      title: 'Sign in',
      subTitle: 'Please enter your details',
      scope: $scope,
      buttons: [
        {
          text: '<b>Login</b>',
          type: 'button-energized',
          onTap: function(user) {
            user = $scope.user;
            Auth.login(user).then(function(){
              $state.go('tab.dash');
            }, function(err){
              console.log('Error...', err);
            });
          }
        },
        {
          text: '<b>Register</b>',
          type: 'button-calm',
          onTap: function(user) {
            user = $scope.user;
            //register the user
            Auth.register(user).then(function(){
              console.log('user was registered successfully');
              $state.go('tab.dash');
            }, function(err){
              console.log('Error...', err);
            });
          }
        }
      ]
    });
  };
});
