var app = angular.module('homeApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        .when('/findMe', {
            templateUrl : 'pages/findMe.html',
            controller  : 'findMeController'
        })
});
app.controller('mainController', function($scope){
    $scope.message = 'Message1';
});
app.controller('aboutController', function($scope){
   $scope.message = "I'm the about page";
});
app.controller('findMeController', function($scope){
    $scope.message = "How do you contact me?"
})