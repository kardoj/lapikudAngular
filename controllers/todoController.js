/**
 * Created by kardo on 30.04.2016.
 */

app.controller("TodoController", function($scope){
    console.log("TodoController is alive");

    $scope.test = function(){
        alert("Clicked!");
    };
});
