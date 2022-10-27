import { Router } from 'express';

import Demo from './demo';

const r = Router();

r.get('/demo', Demo.Perform);

export default r;
