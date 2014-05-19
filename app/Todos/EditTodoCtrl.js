'use strict';

/**
 * Template: edit.html or show.html
 */
app.controller('EditTodoCtrl',
  ['$scope', '$routeParams', 'Todo', 'Todos', 'TodosHttpService',
  function($scope, $routeParams, Todo, Todos, TodosHttpService) {

  console.log('EditTodoCtrl', 'created');

  var id = parseInt($routeParams.id, 10);

  // Can query the server...
  TodosHttpService.get(id).then(function(todo) {
    $scope.todo = todo;
  });

  // ...or get the item from Todos.list
  $scope.$watchCollection(
    function() { return Todos.list },
    function(newValue, oldValue) {
      $scope.todo = _.findWhere(Todos.list, {id: id});
    }
  );

  $scope.save = function() {
    TodosHttpService.update($scope.todo.id, $scope.todo).then(function() {
      var todo = _.findWhere(Todos.list, {id: $scope.todo.id});
      _.extend(todo, $scope.todo);
    });
  };

  $scope.$on('$destroy', function() {
    console.log('EditTodoCtrl', 'destroyed');
  });
}]);
