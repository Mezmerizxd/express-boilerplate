"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../../../utils/Log");
let serverRuntimeCount = 1;
setInterval(() => {
    serverRuntimeCount++;
}, 1000);
class Tests {
    constructor(io, socket) {
        this.handleTest = () => {
            Log_1.default.debug('[IO/V1] Test socket used.');
            this.io.sockets.emit('testSocket', JSON.stringify({ test: 'Test Socket worked' }));
        };
        this.socket = socket;
        this.io = io;
        socket.on('test', this.handleTest);
        setInterval(() => {
            this.io.sockets.emit('count_update', serverRuntimeCount);
        }, 1000);
    }
}
exports.default = Tests;
