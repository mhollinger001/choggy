"use strict";
exports.__esModule = true;
var express_1 = require("express");
var socket_io_1 = require("socket.io");
var app = (0, express_1["default"])();
var server = app.listen(3001, function () {
    console.log("listening on port 3001");
});
var io = new socket_io_1.Server(server);
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
