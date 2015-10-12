(function () {
    'use strict';

    var app = angular.module('app', []);

    $.connection.hub.start().done(function () { });

    app.value('chatHub', $.connection.chatHub);

    var chatController = function ($scope, chatHub) {
        $scope.posts = [];
        $scope.message = '';

        chatHub.client.reciveMessage = function (post) {
            
            $scope.$apply(function() {
                $scope.posts.push(post);
            });
        };


        $scope.displayname = prompt('Enter your name:', '');


        var sendMessage = function () {
            chatHub.server.send($scope.displayname, $scope.message);
        };

        $scope.sendMessage = sendMessage;
    };

    app.controller('chatController', ['$scope', 'chatHub', chatController]);
})();