'use strict';

app.controller('ShowTodoCtrl',
['$scope', '$routeParams', 'GetTodo',
function($scope, $routeParams, GetTodo) {

  console.log('ShowTodoCtrl', 'created');

  GetTodo.get($scope, $routeParams);

  $scope.$on('$destroy', function() {
    console.log('ShowTodoCtrl', 'destroyed');
  });
}]);
