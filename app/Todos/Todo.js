'use strict';

app.factory('Todo', [function() {
  var Todo = function(data) {
    var self = this;

    angular.extend(self, data);

    self.computeDueDate = function() {
      return '';
    }
  };

  // In case the data from server needs to be modified/cleaned/adapted
  Todo.createFromServer = function(data) {
    var tmp = {
      id: data.id,
      title: data.title,
      body: data.body,
      done: data.done
    };

    return new Todo(tmp);
  };

  return Todo;
}]);
