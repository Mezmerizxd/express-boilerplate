import * as dotenv from 'dotenv';
import * as path from 'path';

export default new (class Config {
    public Env = (): any => {
        dotenv.config({ path: path.join(__dirname, '../../../.env') });
        return {
            port: process.env.PORT,
            socketPort: process.env.SOCKET_PORT,
            mySqlEnabled: process.env.ENABLE_MYSQL,
            mySqlHost: process.env.MYSQL_HOST,
            mySqlUser: process.env.MYSQL_USER,
            mySqlPaswd: process.env.MYSQL_PASSWORD,
            mySqlDb: process.env.MYSQL_DATABASE,
            mongoDbEnabled: process.env.ENABLE_MONGODB,
            mongoDbHost: process.env.MONGODB_HOST,
            mongoDbDb: process.env.MONGODB_DATABASE,
        };
    };
})();
