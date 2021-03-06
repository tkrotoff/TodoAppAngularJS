'use strict';

app.service('TodosHttpService', ['$q', '$http', 'Todo', function($q, $http, Todo) {
  var self = this;

  function parseErrors(errors) {
    var error = 'Unknown error';
    if (errors !== undefined) {
      if (errors.id !== undefined && errors.id === 'not found') {
        error = 'Todo id not found';
      }
      else {
        // ...
      }
    }
    return error;
  }

  self.list = function() {
    return $http.get(Config.WEB_SERVICE_HOSTNAME + '/todos').then(
      function(response) {
        var todos = [];
        response.data.forEach(function(todo) {
          todos.push(Todo.createFromServer(todo));
        });
        return todos;
      },
      function(response) {
        var error = parseErrors(response.data.errors);
        return $q.reject(error);
      }
    );
  };

  self.get = function(id) {
    return $http.get(Config.WEB_SERVICE_HOSTNAME + '/todos/' + id).then(
      function(response) {
        return Todo.createFromServer(response.data);
      },
      function(response) {
        var error = parseErrors(response.data.errors);
        return $q.reject(error);
      }
    );
  };

  self.create = function(todo) {
    return $http.post(Config.WEB_SERVICE_HOSTNAME + '/todos', todo).then(
      function(response) {
        return Todo.createFromServer(response.data);
      },
      function(response) {
        var error = parseErrors(response.data.errors);
        return $q.reject(error);
      }
    );
  };

  self.update = function(id, todo) {
    return $http.put(Config.WEB_SERVICE_HOSTNAME + '/todos/' + id, todo).then(
      function(response) {
      },
      function(response) {
        var error = parseErrors(response.data.errors);
        return $q.reject(error);
      }
    );
  };

  self.delete = function(id) {
    return $http.delete(Config.WEB_SERVICE_HOSTNAME + '/todos/' + id).then(
      function(response) {
      },
      function(response) {
        var error = parseErrors(response.data.errors);
        return $q.reject(error);
      }
    );
  };
}]);
