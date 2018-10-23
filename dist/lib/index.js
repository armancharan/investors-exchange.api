"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies.
const axios_1 = require("axios");
// Base URL.
const base = 'https://api.iextrading.com/1.0';
// Fetch.
exports.fetch = (path, params) => __awaiter(this, void 0, void 0, function* () {
    const parameters = params ? Object.entries(params) : '';
    const query = parameters ? parameters.reduce((query, [key, value], i) => `${query}${i > 0 ? '&' : ''}${key}=${value}`, '?') : '';
    const url = `${base}${path}${query}`;
    return (yield axios_1.default.get(url)).data;
});
// Is Array.
exports.isArray = (x) => x && Array.isArray(x);
// Is Number.
exports.isNumber = (x) => x && !isNaN(Number(x));
// Not Object.
exports.notAnObject = (x) => typeof x !== 'object' || Array.isArray(x);
//# sourceMappingURL=index.js.map