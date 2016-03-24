'use strict';
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

<!-- Directive -->

 angular.module('todoListApp')
  .directive('todos', function(){
 	return {
 		templateUrl: 'templates/todos.html',
 		controller: 'mainCtrl',
 		replace: true
 	}

 })
 Status API Training Shop Blog About

<!-- Data -->

 'use strict';
angular.module('todoListApp')
 .service('dataService', function($http) {
 	this.helloConsole = function() {

 		console.log("this is the hello console service!");
 	};

 	this.getTodos = function(callback){
 		$http.get('mock/todos.json').then(callback)

 	};

 	this.deleteTodos = function(todo){
 		console.log("The" + todo.name + " todo has been deleted!");

 	};

 	this.saveTodos = function(todos){
 		console.log(todos.length + " todos have been saved!");
 	};

 });
Status API Training Shop Blog About

<!-- App -->

angular.module("todoListApp", []);

<!-- Hell World -->

angular.module('todoListApp')
 .directive('helloWorld', function(){

 	return{
 		template: "This is the hello world directive",
 		restrict: "E"
 	};

 });
