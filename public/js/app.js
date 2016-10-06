angular.module('app', ['ui.router']);

angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('main', {
                url         : '/',
                templateUrl : '/partials/main.html',
                data        : {
                    css: 'css/main.css'
                }
            });

            $urlRouterProvider.otherwise('/');
    });
