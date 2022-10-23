"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const Log_1 = require("../utils/Log");
exports.default = new (class Http {
    Initialize(app) {
        if (!app) {
            Log_1.default.warn('[Middlewares] [Http] Failed to get application.');
            return;
        }
        app.use(bodyParser.json({
            limit: '50mb',
        }));
        app.use(bodyParser.urlencoded({
            limit: '50mb',
            extended: false,
        }));
        Log_1.default.info('[Middlewares] [Http] Initialized.');
        return app;
    }
})();
