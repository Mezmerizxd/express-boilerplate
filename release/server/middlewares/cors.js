"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const Log_1 = require("../utils/Log");
exports.default = new (class Cors {
    Initialize(app) {
        if (!app) {
            Log_1.default.warn('[Middlewares] [Cors] Failed to get application.');
            return;
        }
        app.use(cors());
        Log_1.default.info('[Middlewares] [Cors] Initialized.');
        return app;
    }
})();
