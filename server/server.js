'use strict';

var _ = require('underscore');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

var todos = [
  {id: 0, title: 'Shopping', body: 'with Alice and Claudia', done: false},
  {id: 1, title: 'Prepare holidays', body: '', done: false},
  {id: 2, title: 'Car wash', body: 'Go to the gas station', done: true},
  {id: 3, title: 'Prepare office presentation', body: 'with Math and David', done: false},
  {id: 4, title: 'Barber', body: '', done: false},
];

app.get('/todos', function(req, res) {
  console.log('GET /todos');

  res.send(todos); // 200 OK
});

app.get('/todos/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);

  var todo = _.findWhere(todos, {id: id});
  console.log('GET /todos/' + id + ':', todo);

  res.send(todo); // 200 OK
});

app.post('/todos', function(req, res) {
  var todo = req.body;
  todo.id = todos.length;
  todos.unshift(todo);
  console.log('POST /todos', todo);

  res.send(201, todo); // 201 Created
});

app.put('/todos/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);

  var todo = _.findWhere(todos, {id: id});
  _.extend(todo, req.body);
  todo.id = id;
  console.log('PUT /todos/' + id, todo);

  res.send(204); // 204 No Content
});

app.delete('/todos/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);

  var todo = _.findWhere(todos, {id: id});
  todos.splice(_.indexOf(todos, todo), 1);
  console.log('DELETE /todos/' + id);

  res.send(204); // 204 No Content
});


var server = app.listen(3000, function() {
  console.log('Listening on port', server.address().port);
});
