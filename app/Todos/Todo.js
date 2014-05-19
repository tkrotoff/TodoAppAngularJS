'use strict';

app.factory('Todo', [function () {
  var Todo = function (data) {
    var self = this;

    angular.extend(self, data);
  };

  Todo.createFromServer = function (data) {
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
