'use strict';
angular.module("todoListApp", []);

/************** services ****************/
/* Data.js: */
'use strict';
angular.module('todoListApp')
 .service('dataService', function($http) {
 	this.helloConsole = function() {

 		console.log("this is the hello console service!");
 	};

 	this.getTodos = function(callback){
 		$http.get('../navigation-group/todos.json').then(callback)

 	};

 	this.deleteTodos = function(todo){
 		console.log("The" + todo.name + " todo has been deleted!");

 	};

 	this.saveTodos = function(todos){
 		console.log(todos.length + " todos have been saved!");
 	};

 });

 /************** controllers ****************/
 /* TodoMain.js: */

angular.module('todoListApp')
 .controller('mainCtrl', function($scope, dataService) {
 	$scope.helloConsole = dataService.helloConsole;

 	$scope.addTodo = function() {
		var todo = {"name": "This is a new todo."}
		$scope.todos.unshift(todo);
 	};

 	dataService.getTodos(function(response){
 		console.log(response.data);
 		$scope.todos = response.data;
 	});

 	$scope.deleteTodos = function(todo, $index){
 		dataService.deleteTodos(todo);
 		$scope.todos.splice($index, 1);
 	};

 	$scope.saveTodos = function(todos){
 		var filteredTodos = $scope.todos.filter(function(todo) {
 			if(todo.edited){
 				return todo;
 			};

 		});
 		dataService.saveTodos(filteredTodos);
 	};

 });

/************** directive ****************/
/* Todo.js: */
// angular.module('todoListApp')
//  .directive('todos', function(){
// 	return {
// 		templateUrl: 'templates/todos.html',
// 		controller: 'mainCtrl',
// 		replace: true
// 	}
//
// })

 /************** Todo App ****************/
 /* app.js: */
 // angular.module("todoListApp")
 //
 // .controller('mainCtrl', function($scope) {
 //   $scope.helloWorld = function() {
 //     console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
 //   };
 //   $scope.todos = [
  //    {"name": "clean the lab"},
  //    {"name": "finish research paper"},
  //    {"name": "Project Fermi "},
  //    {"name": "Project SLAC"},
  //    {"name": "Tutoring Undergrads"},
  //    {"name": "Minutes for HEP Meeting"}
  //  ]
 //
 //   dataService.getTodos (function(response) {
 //     $scope.todos=response.data;
 //   });
 // });

 /************** hello-world.js ****************/

 angular.module('todoListApp')
 .directive('helloWorld', function(){

 	return{
 		template: "This is the hello world directive",
 		restrict: "E"
 	};

 });

 // When defining a module with no module dependencies,
// the array of dependencies should be defined and empty.
var myApp = angular.module('myApp', []);
