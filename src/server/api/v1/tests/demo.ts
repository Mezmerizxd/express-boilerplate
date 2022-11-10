import { Request, Response } from 'express';
import Log from '../../../utils/Log';
import Responder from '../responder';

export default new (class Demo {
    public Perform = (req: Request, res: Response) => {
        Log.debugApi('[V1] [Test] [Demo] Started');
        Responder(res, 'success', {
            demo: 'Hello World',
        });
        Log.debugApi('[V1] [Test] [Demo] Finished');
        return;
    };
})();
