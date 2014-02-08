'use strict';

angular.module('mean.system').controller('FourController', ['$scope', '$socket', 'Global', function ($scope,$socket,Global) {
    $scope.global = Global;

    $socket.on('getResult', function(data){
        console.log('Your Score is: ', data)
    })

    $scope.sendData = function() {
        $socket.emit('getOne', {my: 'data'});
    }
}]);