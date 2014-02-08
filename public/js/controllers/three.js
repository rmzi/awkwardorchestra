'use strict';

angular.module('mean.system').controller('ThreeController', ['$scope', '$socket', 'Global', function ($scope,$socket,Global) {
    $scope.global = Global;

    $socket.on('getResult3', function(data){
        console.log('Your Score is: ', data)
    })

    $scope.sendData = function() {
        $socket.emit('getThree', {my: 'data'});
    }
}]);