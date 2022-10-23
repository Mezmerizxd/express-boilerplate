"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressStatusMonitor = require("express-status-monitor");
const Log_1 = require("../utils/Log");
exports.default = new (class Monitor {
    Initialize(app) {
        if (!app) {
            Log_1.default.warn('[Middlewares] [Monitor] Failed to get application.');
            return;
        }
        const options = {
            title: 'Monitor',
            path: '/monitor',
            spans: [
                {
                    interval: 1,
                    retention: 60,
                },
                {
                    interval: 5,
                    retention: 60,
                },
                {
                    interval: 15,
                    retention: 60,
                },
            ],
            chartVisibility: {
                mem: true,
                rps: true,
                cpu: true,
                load: true,
                statusCodes: true,
                responseTime: true,
            },
            // healthChecks: [
            //     {
            //         protocol: 'http',
            //         host: 'localhost',
            //         path: '/',
            //         port: '3001',
            //     },
            //     {
            //         protocol: 'http',
            //         host: 'localhost',
            //         path: '/api',
            //         port: '3001',
            //     },
            // ],
        };
        app.use(expressStatusMonitor(options));
        Log_1.default.info('[Middlewares] [Monitor] Initialized.');
        return app;
    }
})();
