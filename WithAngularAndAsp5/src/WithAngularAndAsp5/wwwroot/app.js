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

        $scope.displayname = prompt('Enter your name:', '');

        $.connection.hub.start().done(function () {});

        $('#sendmessage').click(function () {
            chat.server.send($scope.displayname, $scope.message);
        });
    };

    app.controller('chatController', ['$scope', chatController]);
})();