import * as dotenv from 'dotenv';
import * as path from 'path';

interface ConfigReturnProps {
    port: any;
    socketPort: any;
    mySqlEnabled: any;
    mySqlHost: any;
    mySqlDevHost: any;
    mySqlUser: any;
    mySqlDevUser: any;
    mySqlPaswd: any;
    mySqlDevPaswd: any;
    mySqlDb: any;
    mySqlDevDb: any;
    mongoDbEnabled: any;
    mongoDbHost: any;
    mongoDbDevHost: any;
    mongoDbDb: any;
    mongoDbDevDb: any;
}

export default new (class Config {
    public Env = (): ConfigReturnProps => {
        dotenv.config({ path: path.join(__dirname, '../../../.server.env') });
        return {
            port: process.env.PORT,
            socketPort: process.env.SOCKET_PORT,
            mySqlEnabled: process.env.ENABLE_MYSQL,
            mySqlHost: process.env.MYSQL_HOST,
            mySqlDevHost: process.env.MYSQL_DEV_HOST,
            mySqlUser: process.env.MYSQL_USER,
            mySqlDevUser: process.env.MYSQL_DEV_USER,
            mySqlPaswd: process.env.MYSQL_PASSWORD,
            mySqlDevPaswd: process.env.MYSQL_DEV_PASSWORD,
            mySqlDb: process.env.MYSQL_DATABASE,
            mySqlDevDb: process.env.MYSQL_DEV_DATABASE,
            mongoDbEnabled: process.env.ENABLE_MONGODB,
            mongoDbHost: process.env.MONGODB_HOST,
            mongoDbDevHost: process.env.MONGODB_DEV_HOST,
            mongoDbDb: process.env.MONGODB_DATABASE,
            mongoDbDevDb: process.env.MONGODB_DEV_DATABASE,
        };
    };
})();
