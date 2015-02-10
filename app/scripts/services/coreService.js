'use strict';
(function(angular){

  angular.module('uluc')
  .factory('coreService', ['$http', function($http) {
    return {
      getRepositories: function(username) {
        return $http.get('https://api.github.com/users/'+ username +'/repos');
      }
    };
  }]);

})(angular);
