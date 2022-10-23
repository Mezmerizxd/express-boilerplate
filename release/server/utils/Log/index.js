"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.default = new (class Log {
    info(string, log) {
        const fString = `[${new Date().toLocaleString()}] [INFO] ${string}`;
        console.log(`\x1b[32m${fString}\x1b[0m`);
        if (log)
            this.LogToFile(fString);
    }
    warn(string, log) {
        const fString = `[${new Date().toLocaleString()}] [WARN] ${string}`;
        console.log(`\x1b[33m${fString}\x1b[0m`);
        if (!log)
            this.LogToFile(fString);
    }
    error(string, log) {
        const fString = `[${new Date().toLocaleString()}] [ERROR] ${string}`;
        console.log(`\x1b[31m${fString}\x1b[0m`);
        if (!log)
            this.LogToFile(fString);
    }
    debug(string) {
        if (process.env.NODE_ENV !== 'production') {
            const fString = `[${new Date().toLocaleString()}] [DEBUG] ${string}`;
            console.log(`\x1b[36m${fString}\x1b[0m`);
        }
    }
    LogToFile(string) {
        const logFilePath = `logs/${new Date()
            .toISOString()
            .replace(/T.*/, '')
            .split('-')
            .reverse()
            .join('-')}.log`;
        // Create the Folder if it doesn't exist
        if (!fs.existsSync(`logs`)) {
            fs.mkdirSync(`logs`);
        }
        // Create the file if it doesn't exist
        if (!fs.existsSync(logFilePath)) {
            fs.writeFileSync(logFilePath, '');
        }
        // Append the data to the file
        fs.appendFileSync(logFilePath, string + '\n');
    }
})();
