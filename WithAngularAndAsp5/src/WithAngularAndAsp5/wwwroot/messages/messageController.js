(function () {
    'use strict';

    var app = angular.module('app');

    $.connection.hub.start().done(function () { });
    
    var messageController = function ($scope, $rootScope, messageService) {

        $scope.message = '';

        if (!$scope.displayname)
            $scope.displayname = prompt('Enter your name:', '');
        
        var sendMessage = function () {
            messageService.send($scope.displayname, $scope.message);
        };

        $scope.posts = messageService.posts;
        $scope.sendMessage = sendMessage;
    };

    app.controller('messageController', ['$scope', '$rootScope', 'messageService', messageController]);
})();