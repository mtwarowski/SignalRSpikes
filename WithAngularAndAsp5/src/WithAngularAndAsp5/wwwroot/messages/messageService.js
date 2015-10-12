(function () {
    'use strict';

    var app = angular.module('app');

    var messageService = function ($rootScope, chatHub) {
        var sendMessage = function (displayName, message) {
            chatHub.server.send(displayName, message);
        };

        var onReciveMessageCallback;

        chatHub.client.reciveMessage = function (message) {
            $rootScope.$emit("onReciveMessageCallback",message);
        };

        return {
            sendMessage: sendMessage,
        };
    };

    app.factory('messageService',  messageService);
})();