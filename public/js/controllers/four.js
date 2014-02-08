'use strict';

angular.module('mean.system').controller('FourController', ['$scope', '$socket', 'Global', function ($scope,$socket,Global) {
    $scope.global = Global;

    $socket.on('getResult4', function(data){
        console.log('Your Score is: ', data)
    })

    $scope.sendData = function() {
        $socket.emit('getFour', {my: 'data'});
    }
}]);