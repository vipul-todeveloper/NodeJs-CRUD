var app = angular.module('NodeCRUD',['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/userList.html',
            controller: 'userCtrl'
        })
        .when('/createUser', {
            templateUrl: '/views/createUser.html',
            controller: 'userCtrl'
        })
        .when('/createUser/:userId', {
            templateUrl: '/views/createUser.html',
            controller: 'userCtrl'
        });
});