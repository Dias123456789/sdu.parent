angular.module('MyApp', ['ui.router','ngMaterial'])
  .config(['$urlRouterProvider', '$stateProvider' ,function($urlRouterProvider,$stateProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('logAndReg',{
              url:'/',
              templateUrl:'views/LoginAndRegistrationView.html',
              controller:'LogAndRegCtrl'
          })
          .state('second', {
              url: '/second',
              templateUrl: 'views/secondView.html',
              controller: 'SecondCtrl'
          });
  }]);