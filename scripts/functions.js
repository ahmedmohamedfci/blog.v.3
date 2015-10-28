
// create the module and name it scotchApp


var routerApp = angular.module('blogapp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: './views/user/main.html',
            controller: 'usermainController'
        })
        .state('article', {
            url: '/article/:articId',
            templateUrl: './views/user/article.html',
            controller: 'userarticleController'

        })
        .state('admin', {
            url: '/admin',
            templateUrl: './views/admin/main.html',
            controller: 'adminMainController'
        })
        .state('adminArticle', {
            url: '/admin/article/:articId',
            templateUrl: '/views/admin/article.html',
            controller: 'adminArticleController'
        });

});


routerApp.controller("loginController",function($scope,$state)
{

    $scope.login = function($user,$pass)
    {
        if($user == "admin" && $pass == "root")
        {
            console.log($user);
            $state.go("admin");
        }

    }
});

routerApp.controller('usermainController', function($scope, $http){

    $http.get("../../api/article")
        .success(function(response) {$scope.message = response;});



});


routerApp.controller('userarticleController', function($scope,$http,$stateParams){


    $http.get("../../api/article/"+$stateParams.articId)
        .success(function(response) {$scope.message = response;})

    $http.get("../../api/comment/"+$stateParams.articId)
        .success(function(response) {$scope.comments = response;})

    $scope.postComment = function($artId,$comment)
    {



        var params = {
            artId : $artId,
            comment:$comment
        };

        $http.post("../../api/comment/",params)
            .success(function(response) {$scope.succe = response;})
        $http.get("../../api/comment")
            .success(function(response) {$scope.message = response;});

    }

});



routerApp.controller('adminMainController', function($scope, $http){

    $http.get("../../api/article")
        .success(function(response) {$scope.message = response;});

    $scope.deleteArticle = function($artId)
    {
        $http.delete("./api/article/"+$artId)
            .success(function(response) {$scope.succe = response;})
        $http.get("../../api/article")
            .success(function(response) {$scope.message = response;});

    };

    $scope.postNewArticle = function($name,$body)
    {

        var params = {
            artName : $name,
            description:$body
        };

        console.log(params);
        $http.post("../../api/article/",params)
            .success(function(response) {$scope.succe = response;})

        $http.get("../../api/article")
            .success(function(response) {$scope.message = response;});
    }

});



routerApp.controller('adminArticleController', function($scope,$http,$stateParams){


    $http.get("../../api/article/"+$stateParams.articId)
        .success(function(response) {$scope.message = response;})

    $http.get("../../api/comment/"+$stateParams.articId)
        .success(function(response) {$scope.comments = response;})

    $scope.postComment = function($artId,$comment)
    {



        var params = {
            artId : $artId,
            comment:$comment
        };

        $http.post("../../api/comment/",params)
            .success(function(response) {$scope.succe = response;})
        $http.get("../../api/comment")
            .success(function(response) {$scope.message = response;});

    }

    $scope.editArticle = function($artId,$name,$body)
    {
        var params = {
            name:$name,
            description:$body

        };


        $http.put("../../api/article/"+$artId,params)
            .success(function(response) {$scope.succe = response;})

        $http.get("../../api/article/"+$artId)
            .success(function(response) {$scope.message = response;});

    }


});
