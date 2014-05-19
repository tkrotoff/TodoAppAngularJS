# Todo app using AngularJS

Demonstrates a simple CRUD app using AngularJS and Node.js for the backend.

This is how I build AngularJS apps.

Compare to other AngularJS demos, this one focus on:
- The model layer: [Todo.js](https://github.com/tkrotoff/TodoAppAngularJS/blob/master/app/Todos/Todo.js), [Todos.js](https://github.com/tkrotoff/TodoAppAngularJS/blob/master/app/Todos/Todos.js)
- A "regular" HTTP layer: [TodosHttpService.js](https://github.com/tkrotoff/TodoAppAngularJS/blob/master/app/Todos/TodosHttpService.js)
- Organization by features instead of types (views, controllers, services...), check [app](https://github.com/tkrotoff/TodoAppAngularJS/tree/master/app) directory

# External documentation

Here two tutorials (that I liked) to start with AngularJS:
- [AngularJS end-to-end web app tutorial Part I](http://www.youtube.com/watch?v=Ja2xDrtylBw), bad sound quality but nicely explained
- [AngularJS Fundamentals In 60-ish Minutes](http://www.youtube.com/watch?v=i9MHigUZKEM)

Other links:
- [SPA](http://en.wikipedia.org/wiki/Single-page_application)
- [REST](http://en.wikipedia.org/wiki/Representational_state_transfer)
- [Two-way data binding](https://docs.angularjs.org/guide/databinding)
- [Dependency injection](https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection)
- [Services vs factories vs providers](http://iffycan.blogspot.fr/2013/05/angular-service-or-factory.html)
- [Directives](http://www.ng-newsletter.com/posts/directives.html)
- [Promises](http://andyshora.com/promises-angularjs-explained-as-cartoon.html)

Recommended books:
- [Mastering Web Application Development with AngularJS](http://www.amazon.com/Mastering-Web-Application-Development-AngularJS/dp/1782161821), 372 pages
- [ng-book - The Complete Book on AngularJS](http://www.amazon.com/ng-book-Complete-AngularJS-Ari-Lerner/dp/099134460X), 624 pages

# General files and directories organization

Traditional AngularJS apps follow the "1 directory = 1 type" convention. This web app on the other hand follow the "1 directory = 1 feature" convention when applicable.
- See [Code Organization in Large AngularJS and JavaScript Applications](http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript)
- See [Building large apps with AngularJS](https://coderwall.com/p/y0zkiw)
- Check [app](https://github.com/tkrotoff/TodoAppAngularJS/tree/master/app) directory
