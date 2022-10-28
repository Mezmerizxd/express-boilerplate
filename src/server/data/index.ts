import MongoDb from './mongodb';
import MySql from './mysql';

export default new (class Data {
    public Initialize = async () => {
        MySql.Test();
        await MongoDb.Test();
    };
})();
