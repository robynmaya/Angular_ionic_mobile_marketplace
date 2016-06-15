'use strict';

app.controller('PhotoDetailCtrl', function($scope, $state, Products, $rootScope) {

  $scope.imgURI = $rootScope.imgURI;

  $scope.button = function(product){
    //console.log('button was clicked', product, $scope.image);
    Products.saveProduct(product, $scope.imgURI).then(function(){
      $state.go('tab.dash');
    });
  }
});
