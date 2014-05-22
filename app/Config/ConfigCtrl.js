'use strict';

/**
 * Template: config.html
 */
app.controller('ConfigCtrl', ['$scope', function($scope) {
  console.log('ConfigCtrl', 'created');

  // Initialize $scope
  for (var key in Config) {
    $scope[key] = Config[key];
  }

  $scope.save = function() {
    for (var key in Config) {
      Config[key] = $scope[key];
      localStorage.setItem(key, Config[key]);
    }
  };

  $scope.clearLocalStorage = function() {
    localStorage.clear();
    $scope.reload = true;
  };

  $scope.$on('$destroy', function() {
    console.log('ConfigCtrl', 'destroyed');
  });
}]);
