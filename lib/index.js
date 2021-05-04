"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var push_1 = require("./push");
require("dotenv/config");
var node_cron_1 = __importDefault(require("node-cron"));
var DEFAULT_SCHEDULE = '*/5 * * * *';
var schedule = (_a = process.env.SCHEDULE) !== null && _a !== void 0 ? _a : DEFAULT_SCHEDULE;
node_cron_1.default.schedule(schedule, main);
function main() {
    var _a = process.env, PUSH_API_URL = _a.PUSH_API_URL, PUSH_API_KEY = _a.PUSH_API_KEY, DOMAIN_NAME = _a.DOMAIN_NAME;
    if (PUSH_API_URL == null || PUSH_API_KEY == null || DOMAIN_NAME == null) {
        return;
    }
    push_1.push(PUSH_API_URL, DOMAIN_NAME, PUSH_API_KEY)
        .then(function (res) { return console.log(res.statusText); })
        .catch(function (err) { return console.error(err); });
}
