(function () {
    'use strict';

    var app = angular.module('app', []);


    var chatController = function ($scope) {
        $scope.posts = [];
        $scope.message = '';

        var chat = $.connection.chatHub;
        chat.client.reciveMessage = function (post) {
            
            $scope.$apply(function() {
                $scope.posts.push(post);
            });
        };

        $.connection.hub.start().done(function () {});

        $scope.displayname = prompt('Enter your name:', '');


        var sendMessage = function () {
            chat.server.send($scope.displayname, $scope.message);
        };

        $scope.sendMessage = sendMessage;
    };

    app.controller('chatController', ['$scope', chatController]);
})();