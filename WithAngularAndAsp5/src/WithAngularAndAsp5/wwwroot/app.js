(function () {
    'use strict';

    var app = angular.module('app', []);


    var chatController = function ($scope) {

        var chat = $.connection.chatHub;
        chat.client.reciveMessage = function (user) {
            var encodedName = $('<div />').text(user.name).html();
            var encodedMsg = $('<div />').text(user.message).html();
            $('#allMessages').append('<li><strong>' + encodedName
                + '</strong>:&nbsp;&nbsp;' + encodedMsg + '</li>');
        };

        $('#displayname').val(prompt('Enter your name:', ''));

        $('#message').focus();

        $.connection.hub.start().done(function () {});

        $('#sendmessage').click(function () {
            chat.server.send($('#displayname').val(), $('#message').val());
            $('#message').val('').focus();
        });
    };

    app.controller('chatController', ['$scope', chatController]);
})();