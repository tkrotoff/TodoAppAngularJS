'use strict';

var _ = require('underscore'),
   express = require('express'),
   bodyParser = require('body-parser');

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
  res.send(todos); // 200 OK

  console.log('GET /todos');
});

app.get('/todos/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);

  var todo = _.findWhere(todos, {id: id});
  if (todo === undefined) {
    res.send(422, {errors: {id: 'not found'}}); // 422 Unprocessable Entity
  } else {
    res.send(todo); // 200 OK
  }

  console.log('GET /todos/' + id + ':', todo);
});

app.put('/todos/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);

  var todo = _.findWhere(todos, {id: id});
  if (todo === undefined) {
    res.send(422, {errors: {id: 'not found'}}); // 422 Unprocessable Entity
  } else {
    _.extend(todo, req.body);
    res.send(204); // 204 No Content
  }

  console.log('PUT /todos/' + id, todo);
});

app.post('/todos', function(req, res) {
  var todo = req.body;
  todo.id = todos.length;
  todos.unshift(todo);
  res.send(201, todo); // 201 Created

  console.log('POST /todos', todo);
});

app.delete('/todos/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);

  var todo = _.findWhere(todos, {id: id});
  if (todo === undefined) {
    res.send(422, {errors: {id: 'not found'}}); // 422 Unprocessable Entity
  } else {
    todos.splice(todos.indexOf(todo), 1);
    res.send(204); // 204 No Content
  }

  console.log('DELETE /todos/' + id);
});


var server = app.listen(3000, function() {
  console.log('Listening on port', server.address().port);
});
