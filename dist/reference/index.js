(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../lib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Dependencies.
    const lib_1 = require("../lib");
    // Path.
    const path = (extension) => `/ref-data${extension}`;
    // Reference.
    exports.reference = {
        // Corporate Actions.
        corporate_actions: async (date) => await lib_1.fetch(path(`/daily-list/corporate-actions${date ? `/${date}` : ''}`)),
        // Dividends.
        dividends: async (date) => await lib_1.fetch(path(`/daily-list/dividends${date ? `/${date}` : ''}`)),
        // Next Day Ex Date.
        next_day_ex_date: async (date) => await lib_1.fetch(path(`/daily-list/next-day-ex-date${date ? `/${date}` : ''}`)),
        // Symbols.
        symbols: async (format = 'json') => await lib_1.fetch(path('/symbols'), { format }),
        // Symbol Directory.
        symbol_directory: async (date) => await lib_1.fetch(path(`/daily-list/symbol-directory${date ? `/${date}` : ''}`))
    };
});
//# sourceMappingURL=index.js.map