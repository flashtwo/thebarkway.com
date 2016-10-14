var controllers = angular.module('app.controllers', []);

controllers.controller('videoplayercontroller', ['$scope', function($scope) {
    // $scope.nothin = '';
    $scope.playing = false;
    // $scope.mp4Files = ['sample1.mp4', 'sample2.mp4'];
    $scope.video = document.getElementById('about-video');
    // $scope.video.controls = true;
    // $scope.currentIndex = 0;
    $scope.play = function() {
        if ($scope.playing == true) {
            $scope.pause();
        } else {
            $scope.playing = true;
            // $scope.video.src = $scope.sourceLocation + $scope.mp4Files[$scope.currentIndex];
            // $scope.playingFile = $scope.video.src;
            $scope.video.play();
            $scope.video.webkitEnterFullscreen();
        }
    };
    $scope.stop = function() {
        $scope.video.pause();
        $scope.playing = false;
    };
    $scope.pause = function() {
        $scope.video.pause();
        $scope.playing = false;
    };
    // $scope.video.addEventListener('ended', function() {
    //     $scope.$apply(function() {
    //         $scope.currentIndex++;
    //         if ($scope.currentIndex >= $scope.mp4Files.length) {
    //             $scope.currentIndex = 0;
    //         }
    //         $scope.play();
    //     });
    // });
}]);
