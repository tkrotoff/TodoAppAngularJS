'use strict';

app.service('GetTodo',
['Todos', 'TodosHttpService',
function(Todos, TodosHttpService) {

  var self = this;

  self.get = function($scope, $routeParams) {
    var id = parseInt($routeParams.id, 10);

    // Can query the server...
    TodosHttpService.get(id).then(function(todo) {
      $scope.todo = todo;
    });

    // ...or get the item from Todos.list
    $scope.$watchCollection(
      function() { return Todos.list },
      function(newValue, oldValue) {
        if (Todos.list !== undefined || Todos.list.length > 0) {
          $scope.todo = _.findWhere(Todos.list, {id: id});
        }
      }
    );
  };
}]);
