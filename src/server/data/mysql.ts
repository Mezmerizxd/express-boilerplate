import * as mysql from 'mysql2';
import * as util from 'util';
import Log from '../utils/Log';
import Config from '../config';

export default new (class MySql {
    private connection: mysql.Connection;
    private connected: boolean;

    constructor() {
        if (Config.Env().mySqlEnabled === 'true') {
            this.connection = mysql.createConnection({
                host: Config.Env().mySqlHost,
                user: Config.Env().mySqlUser,
                password: Config.Env().mySqlPaswd,
                database: Config.Env().mySqlDb,
            });

            this.connection.connect((err) => {
                if (err) {
                    Log.warn(`[Data] [MySql] Connection error, ${err.message}`);
                    return;
                }
                this.connected = true;
                Log.info('[Data] [MySql] Connection established.');
            });
        }
    }

    public Query = (query: string, callback?: (results: any) => void) => {
        if (Config.Env().mySqlEnabled === 'true' && this.connected) {
            try {
                this.connection.execute(query, (err: any, results: any) => {
                    if (err) {
                        Log.error(`[Data] [MySql] Query error, ${err.message}`);
                        return;
                    }
                    if (callback) callback(results);
                    return results;
                });
            } catch (error) {
                Log.error(`[Data] [MySql] Something went wrong, ${error}`);
            }
        }
    };

    public QueryAsync = async (query: string) => {
        if (Config.Env().mySqlEnabled === 'true' && this.connected) {
            try {
                const promisql = util
                    .promisify(this.connection.query)
                    .bind(this.connection);
                const result = promisql(query);
                return result;
            } catch (error) {
                Log.error(`[Data] [MySql] Something went wrong, ${error}`);
            }
        }
    };
})();
