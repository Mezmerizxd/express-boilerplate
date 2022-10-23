"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../../../utils/Log");
exports.default = new (class Demo {
    constructor() {
        this.Perform = (req, res) => {
            Log_1.default.debug('[API/V1] Debug used.');
            res.status(200).json({
                error: false,
                data: {
                    demo: 'Hello World',
                },
            });
            return;
        };
    }
})();
