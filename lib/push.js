"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = void 0;
var axios_1 = __importDefault(require("axios"));
function push(url, domainName, apiKey) {
    return axios_1.default.post(url, {
        domainName: domainName
    }, {
        headers: {
            'x-api-key': apiKey
        }
    });
}
exports.push = push;
