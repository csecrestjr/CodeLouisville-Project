angular.module("todolistApp")
.controller('mainCtrl', function($scope) {
  $scope.GettingStarted = function() {
    console.log("Let's get started! This the GettingStarted controller function,in the mainCtrl!");
  }
});
