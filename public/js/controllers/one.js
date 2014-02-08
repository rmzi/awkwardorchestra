'use strict';

angular.module('mean.system').controller('OneController', ['$scope', '$socket', 'Global', function ($scope,$socket,Global) {
    $scope.global = Global;

    $socket.on('getResult1', function(data){
    	console.log('Your Score is: ', data)
    })

    $scope.sendData = function() {
    	$socket.emit('getOne', {my: 'data'});
    }
}]);

