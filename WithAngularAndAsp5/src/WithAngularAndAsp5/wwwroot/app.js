(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'SignalR']);

    //$.connection.hub.start().done(function () { });

    //app.value('chatHub', $.connection.chatHub);

    //app.run([
    //    '$rootScope', function ($rootScope, security) {
    //        $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
    //            $.connection.hub.stop();
    //        });
    //    }]);

    app.config(function ($routeProvider) {
        $routeProvider
        .when("/main", {
            templateUrl: "messages/messageTmpl.html",
            controller: "messageController"
        })
        .otherwise({redirectTo:"/main"});
    });
})();