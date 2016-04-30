/**
 * Created by kardo on 30.04.2016.
 */

app.controller("TodoController", function($scope){
    console.log("TodoController is alive");

    $scope.todos = [
        { name: "First assignment"},
        { name: "Learn Angular" },
        { name: "Third assignment"}
    ];
    $scope.editing = false;

    $scope.click = function(buttonText){
        console.log(buttonText + " was clicked!");
    };

    $scope.edit = function(){
        $scope.editing = !$scope.editing;
    };

});
