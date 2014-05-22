'use strict';

app.controller('ListTodosCtrl',
  ['$scope', 'Todo', 'Todos', 'TodosHttpService',
  function($scope, Todo, Todos, TodosHttpService) {

  console.log('ListTodosCtrl', 'created');

  // This won't work, we have to watch Todos.list
  //$scope.todos = Todos.list;

  $scope.$watchCollection(
    function() { return Todos.list },
    function(newValue, oldValue) {
      $scope.todos = Todos.list;
    }
  );

  $scope.markAs = function(todo, done) {
    var tmp = new Todo(todo);
    tmp.done = done;
    TodosHttpService.update(todo.id, tmp).then(
      function() {
        var todo2 = _.findWhere(Todos.list, {id: todo.id});
        todo2.done = done;
      },
      function(error) {
        $scope.error = error;
      }
    );
  };

  $scope.delete = function(todo) {
    TodosHttpService.delete(todo.id).then(
      function() {
        var todo2 = _.findWhere(Todos.list, {id: todo.id});
        Todos.list.splice(_.indexOf(Todos.list, todo2), 1);
      },
      function(error) {
        $scope.error = error;
      }
    );
  };

  $scope.$on('$destroy', function() {
    console.log('ListTodosCtrl', 'destroyed');
  });
}]);
