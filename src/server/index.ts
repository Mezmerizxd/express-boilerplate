import * as express from 'express';
import Log from './utils/Log';
import Config from './config';

import Middlewares from './middlewares';

import v1 from './api/v1';
import Io from './api/v1/io';

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(Config.Env().socketPort, {
    cors: { origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' },
});

// Middlewares
Middlewares.Initialize(app);

// Routes
app.use('/api/v1', v1);

io.on('connection', (socket) => {
    Log.debug('[Server] [IO] Connection to socket created.');
    new Io(io, socket);
});

http.listen(Config.Env().port, async () => {
    Log.info('[Server] Started.');
});
