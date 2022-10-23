"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tests_1 = require("./tests");
const r = (0, express_1.Router)();
r.use('/tests', tests_1.default);
exports.default = r;
