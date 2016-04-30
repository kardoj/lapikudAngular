/**
 * Created by kardo on 30.04.2016.
 */

app.service("dataService", function($http){
    this.getTodos = function(callback){
        $http.get("REST/todos.json").
            then(callback);
    }
});
