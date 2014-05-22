'use strict';

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'Todos/list/list.html',
      controller: 'ListTodosCtrl'
    })
    .when('/todos/:id/show', {
      templateUrl: 'Todos/show/show.html',
      controller: 'ShowTodoCtrl'
    })
    .when('/todos/create', {
      templateUrl: 'Todos/create/create.html',
      controller: 'CreateTodoCtrl'
    })
    .when('/todos/:id/edit', {
      templateUrl: 'Todos/edit/edit.html',
      controller: 'EditTodoCtrl'
    })

    .when('/about', {
      templateUrl: 'About/about.html'
    })

    .when('/config', {
      templateUrl: 'Config/config.html',
      controller: 'ConfigCtrl'
    })

    .otherwise({
      redirectTo: '/'
    });
}]);
