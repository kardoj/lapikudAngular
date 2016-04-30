/**
 * Created by kardo on 30.04.2016.
 */

app.controller("TodoController", function($scope, dataService){
    console.log("TodoController is alive");

    dataService.getTodos(function (response) {
        $scope.todos = response.data;
    });

    $scope.edit = function(){
        $scope.editing = !$scope.editing;
    };

    $scope.deleteTodo = function(todo, index){
        $scope.todos.splice(index, 1);
        dataService.deleteTodo(todo);
        console.log("Deleted from runtime " + index);
    };

    $scope.saveTodo = function(todo, index){
        console.log(JSON.stringify(todo) + " saved.");
    };

    $scope.addTodo = function(){
        var newTodo = {name: "New todo"};
        $scope.todos.push(newTodo);
        console.log("Todo " + JSON.stringify(newTodo) + " added.");
    };

});
