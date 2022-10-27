import * as mongo from 'mongodb';
import Log from '../utils/Log';
import Config from '../config';

export default new (class MongoDb {
    private options: any = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: '1',
        connectTimeoutMS: 30000,
        keepAlive: true,
    };

    private client: mongo.MongoClient = new mongo.MongoClient(
        Config.Env().mongoDbHost,
        this.options
    );

    constructor() {
        if (Config.Env().mongoDbEnabled === 'true') {
            try {
                this.client
                    .connect()
                    .then(() => {
                        Log.info('[Data] [MongoDb] Connection established.');
                    })
                    .catch((err) => {
                        Log.warn(`[Data] [MongoDb] Connection error, ${err}`);
                    });
            } catch (error) {
                Log.error(`[Data] [MongoDb] Something went wrong, ${error}`);
            }
        } else {
            Log.warn('[Data] [MongoDb] MongoDb is disabled.');
        }
    }

    public Query = async (
        collection: string,
        callback: (collection: any) => any
    ) => {
        if (Config.Env().mongoDbEnabled === 'true') {
            try {
                await this.client.connect();
                const mongoCollection = this.client
                    .db(Config.Env().mongoDbDb)
                    .collection(collection);
                return await callback(mongoCollection);
            } catch (error) {
                Log.error(`[Data] [MongoDb] Query error, ${error}`);
            } finally {
                await this.client.close();
            }
        }
    };
})();
