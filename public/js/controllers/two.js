'use strict';

angular.module('mean.system').controller('TwoController', ['$scope', '$socket', 'Global', function ($scope,$socket,Global) {
    $scope.global = Global;

    $socket.on('getResult2', function(data){
        console.log('Your Score is: ', data)
    })

    $scope.sendData = function() {
        $socket.emit('getTwo', {my: 'data'});
    }
}]);