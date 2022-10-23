"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../../utils/Log");
const io_1 = require("./tests/io");
class Io {
    constructor(io, socket) {
        this.disconnect = () => {
            Log_1.default.debug('[API/V1] [IO] Connection to socket destroyed.');
        };
        this.socket = socket;
        this.io = io;
        new io_1.default(this.io, this.socket);
        socket.on('disconnect', this.disconnect);
    }
}
exports.default = Io;
