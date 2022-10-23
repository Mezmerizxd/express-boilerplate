"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Log_1 = require("./utils/Log");
const config_1 = require("./config");
const path = require("path");
const middlewares_1 = require("./middlewares");
const v1_1 = require("./api/v1");
const io_1 = require("./api/v1/io");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(config_1.default.Env().socketPort, {
    cors: { origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' },
});
// Middlewares
middlewares_1.default.Initialize(app);
// Routes
app.use('/api/v1', v1_1.default);
// Statics
app.use(express.static(path.join(__dirname, `../../release/client/`)));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, `../../release/client/index.html`));
});
io.on('connection', (socket) => {
    Log_1.default.debug('[Server] [IO] Connection to socket created.');
    new io_1.default(io, socket);
});
http.listen(config_1.default.Env().port, () => __awaiter(void 0, void 0, void 0, function* () {
    Log_1.default.info('[Server] Started.');
}));
