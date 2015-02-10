'use strict';
(function(angular){

  angular.module('uluc')
  .controller('RepositoriesController', ['$scope', '$http', 'coreService', function ($scope, $http, coreService) {
    $scope.repositories = [];
    var _githubUsername = 'ulucaydin';
    var promise = coreService.getRepositories(_githubUsername);

    promise.then(
      function (successResponse){
        $scope.repositories = successResponse.data;
      },
      function(errorResponse){

      });
  }]);

})(angular);
