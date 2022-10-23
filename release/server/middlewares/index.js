"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../utils/Log");
const cors_1 = require("./cors");
const http_1 = require("./http");
const monitor_1 = require("./monitor");
exports.default = new (class Middlewares {
    Initialize(app) {
        if (!app) {
            Log_1.default.warn('[Middlewares] Failed to get application.');
            return;
        }
        cors_1.default.Initialize(app);
        http_1.default.Initialize(app);
        monitor_1.default.Initialize(app);
        Log_1.default.info('[Middlewares] Initialized.');
        return app;
    }
})();
