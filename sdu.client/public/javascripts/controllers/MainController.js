angular.module('MyApp')
    .controller('LogAndRegCtrl', ['$http','$scope','$state','$rootScope',function($http,$scope,$state,$rootScope) {
        console.log("LogAndRegCtrl");
        console.log("Check token");

        $scope.mylist = [{
            id:1231,
            name:'Dias'
        },{
            id:1244,
            name:'Mama'
        }];
    }])
    .controller('SecondCtrl', ['$http','$scope','$state','$rootScope',function($http,$scope,$state,$rootScope) {
        console.log("SecondController");
        console.log("Check token");
        console.log($sessionStorage.userToken);
        console.log($sessionStorage.personId);
    }])
    .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
        function($scope, $location, $anchorScroll) {

            $scope.goHome = function() {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('home');

                // call $anchorScroll()
                $anchorScroll();
            };
            $scope.goTeam = function() {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('team');

                // call $anchorScroll()
                $anchorScroll();
            };
            $scope.goPost = function() {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('portfolio');

                // call $anchorScroll()
                $anchorScroll();
            };
    }])
    .controller('popup', function ($scope) {
    //This will hide the DIV by default.
        $scope.IsVisible = false;
        $scope.IsVisible2 = false;
        $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
             $scope.IsVisible = $scope.IsVisible ? false : true;
            $scope.IsVisible2 = false;
        };
        $scope.ShowHide2 = function () {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible2 = $scope.IsVisible2 ? false : true;
            $scope.IsVisible = false;
        };
    });