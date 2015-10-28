(function () {
    'use strict';

    var app = angular.module('app');

    var messageService = function ($rootScope, Hub) {
        
        var chatMessages = this;

        var hub = new Hub('chatHub', {
            listeners: {
                'reciveMessage': function (message) {
                    addMessage(message);                    
                }
            },
            methods: ['send']
        });

        var addMessage = function (message) {
            chatMessages.posts.push(message);
            $rootScope.$apply();
        };

        chatMessages.posts = [];
        chatMessages.send = hub.send;
        return chatMessages;
    };

    app.factory('messageService',  messageService);
})();