'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        }).
		when('/1', {
            templateUrl: 'views/controller/1.html',
            controller: 'OneController'
        }).
        when('/2', {
            templateUrl: 'views/controller/2.html',
            controller: 'TwoController'
        }).
        when('/3', {
            templateUrl: 'views/controller/3.html',
            controller: 'ThreeController'
        }).
        when('/4', {
            templateUrl: 'views/controller/4.html',
            controller: 'FourController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);