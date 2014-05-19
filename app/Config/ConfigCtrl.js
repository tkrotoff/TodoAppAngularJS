'use strict';

/**
 * Template: config.html
 */
app.controller('ConfigCtrl', ['$scope', function($scope) {
  console.log('ConfigCtrl', 'created');

  // Initialize $scope
  for (var key in Config) {
    if (Config.hasOwnProperty(key)) {
      $scope[key] = Config[key];
    }
  }

  $scope.save = function() {
    for (var key in Config) {
      if (Config.hasOwnProperty(key)) {
        console.log('Config', 'save', 'key:', key, 'value:', Config[key]);
        Config[key] = $scope[key];
        localStorage.setItem(key, Config[key]);
      }
    }
    $scope.saved = true;
  };

  $scope.clearLocalStorage = function() {
    localStorage.clear();
    $scope.saved = true;
  };

  $scope.$on('$destroy', function() {
    console.log('ConfigCtrl', 'destroyed');
  });
}]);
