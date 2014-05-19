'use strict';

app.service('Todos', ['TodosHttpService', function(TodosHttpService) {
  var self = this;

  self.list = [];

  TodosHttpService.list().then(function(todos) {
    self.list = todos;
  });
}]);
