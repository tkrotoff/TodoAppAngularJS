'use strict';

/**
 * Template: create.html
 */
app.controller('CreateTodoCtrl',
  ['$scope', 'Todo', 'Todos', 'TodosHttpService',
  function($scope, Todo, Todos, TodosHttpService) {

  console.log('CreateTodoCtrl', 'created');

  $scope.todo = new Todo();

  $scope.create = function() {
    TodosHttpService.create($scope.todo).then(function(todo) {
      Todos.list.unshift(todo);
    });
  };

  $scope.$on('$destroy', function() {
    console.log('CreateTodoCtrl', 'destroyed');
  });
}]);
