(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "axios"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Dependencies.
    const axios_1 = require("axios");
    // Base URL.
    const base = 'https://api.iextrading.com/1.0';
    // Fetch.
    exports.fetch = async (path, params) => {
        const parameters = params ? Object.entries(params) : '';
        const query = parameters ? parameters.reduce((query, [key, value], i) => `${query}${i > 0 ? '&' : ''}${key}=${value}`, '?') : '';
        const url = `${base}${path}${query}`;
        return (await axios_1.default.get(url)).data;
    };
    // Is Array.
    exports.isArray = (x) => x && Array.isArray(x);
    // Is Number.
    exports.isNumber = (x) => x && !isNaN(Number(x));
    // Not Object.
    exports.notAnObject = (x) => typeof x !== 'object' || Array.isArray(x);
});
//# sourceMappingURL=index.js.map