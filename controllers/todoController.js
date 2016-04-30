/**
 * Created by kardo on 30.04.2016.
 */

app.controller("TodoController", function($scope, dataService){
    console.log("TodoController is alive");

    dataService.getTodos(function (response) {
        $scope.todos = response.data;
    });

    $scope.click = function(buttonText){
        console.log(buttonText + " was clicked!");
    };

    $scope.edit = function(){
        $scope.editing = !$scope.editing;
    };

});
