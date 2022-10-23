"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const demo_1 = require("./demo");
const r = (0, express_1.Router)();
r.get('/demo', demo_1.default.Perform);
exports.default = r;
