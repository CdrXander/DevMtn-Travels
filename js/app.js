angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('locations', {
            	url: '/locations/',
            	templateUrl: "../views/locations.html"
            })
            .state('packages', {
            	url:"/packages/",
            	templateUrl: "../views/packages.html"
            })
            .state('adventurers', {
            	url:"/about/",
            	templateUrl: "../views/about-adventurers.html"
            })
            .state('contact', {
            	url:"/contact/",
            	// parent: '',
            	templateUrl:"../views/contact.html"
            })
            .state('booked', {
            	url: '/booked/:id',
            	templateUrl:"../views/booked.html",
            	controller: 'bookedCtrl'
            });

        $urlRouterProvider
            .otherwise('/');
    });
