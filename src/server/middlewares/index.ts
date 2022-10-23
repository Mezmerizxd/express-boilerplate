import * as express from 'express';
import Log from '../utils/Log';

import Cors from './cors';
import Http from './http';
import Monitor from './monitor';

export default new (class Middlewares {
    public Initialize(app: express.Application) {
        if (!app) {
            Log.warn('[Middlewares] Failed to get application.');
            return;
        }

        Cors.Initialize(app);
        Http.Initialize(app);
        Monitor.Initialize(app);
        Log.info('[Middlewares] Initialized.');
        return app;
    }
})();
