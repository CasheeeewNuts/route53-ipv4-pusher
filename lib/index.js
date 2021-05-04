"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var push_1 = require("./push");
function main() {
    var _a = process.env, PUSH_API_URL = _a.PUSH_API_URL, PUSH_API_KEY = _a.PUSH_API_KEY, DOMAIN_NAME = _a.DOMAIN_NAME;
    if (PUSH_API_URL == null || PUSH_API_KEY == null || DOMAIN_NAME == null) {
        return;
    }
    push_1.push(PUSH_API_URL, DOMAIN_NAME, PUSH_API_KEY)
        .then(function (res) { return console.log(res.statusText); })
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
