angular.module('app')
    .controller('landingCtrl', ['$scope', '$interval', '$timeout', '$window', '$state',
        function($scope, $interval, $timeout, $window, $state) {
            var lc = this,
                i  = 1;
            lc.nextScreen = true;

            lc.msg = [];

            lc.boot = function() {
                lc.messages(lc.startup);
            };

            lc.messages = function(callback) {
                i = 0;

                $interval(function(){
                    lc.msg.push(bootLog[i]);
                    i++;
                    // keep page scrolled down
                    document.getElementById('bottom').scrollIntoView();

                    if(i == 339){
                        $timeout(function () {
                            callback(lc.redirect);
                        }, 500);
                    }
                }, 20, 340);
            };

            lc.startup = function(callback) {
                var ranNum = Math.floor(Math.random()*900) + 100,
                    startx = 'startx';

                lc.nextScreen = false;
                lc.msg = 'anon' + ranNum + '@tie-x1:~$ ';
                i = 0;

                $timeout(function () {
                    $interval(function(){
                        lc.msg += startx.charAt(i);
                        i++;

                        if(i == 5){
                            $timeout(function () {
                                callback();
                            }, 1000);
                        }
                    }, 500, 6);
                }, 500);
                // callback();
            };

            lc.redirect = function() {
                // $window.location.href = '/#/main';
                $state.go('main');
            };

            lc.boot();
}]);
