(function () {
    'use strict';

    var app = angular.module('app', []);

    $.connection.hub.start().done(function () { });

    app.value('chatHub', $.connection.chatHub);

    var chatController = function ($scope,$rootScope, messageService) {
        $scope.posts = [];
        $scope.message = '';


        $scope.displayname = prompt('Enter your name:', '');

        var onReciveMessage = function (post) {            
            $scope.$apply(function() {
                $scope.posts.push(post);
            });
        };
        
        var sendMessage = function () {
            messageService.sendMessage($scope.displayname, $scope.message);
        };

        $scope.$parent.$on("onReciveMessageCallback", function (e, message) {
                onReciveMessage(message)
        });

        $scope.sendMessage = sendMessage;
    };

    app.controller('chatController', ['$scope', '$rootScope', 'messageService', chatController]);
})();