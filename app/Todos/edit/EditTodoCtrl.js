'use strict';

app.controller('EditTodoCtrl',
['$scope', '$routeParams', '$location', 'Todos', 'TodosHttpService', 'GetTodo',
function($scope, $routeParams, $location, Todos, TodosHttpService, GetTodo) {

  console.log('EditTodoCtrl', 'created');

  $scope.todo = undefined;

  GetTodo.get($scope, $routeParams);

  $scope.save = function() {
    TodosHttpService.update($scope.todo.id, $scope.todo).then(function() {
      var todo = _.findWhere(Todos.list, {id: $scope.todo.id});
      _.extend(todo, $scope.todo);
    });
  };

  $scope.delete = function() {
    TodosHttpService.delete($scope.todo.id).then(function() {
      var todo = _.findWhere(Todos.list, {id: $scope.todo.id});
      Todos.list.splice(Todos.list.indexOf(todo), 1);

      $location.path('/');
    });
  };

  $scope.$on('$destroy', function() {
    console.log('EditTodoCtrl', 'destroyed');
  });
}]);
