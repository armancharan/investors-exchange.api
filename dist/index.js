(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lib", "./reference", "./stock"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Dependencies.
    const lib_1 = require("./lib");
    exports.fetch = lib_1.fetch;
    const reference_1 = require("./reference");
    exports.reference = reference_1.reference;
    const stock_1 = require("./stock");
    const stock = (symbol) => new stock_1.stock(symbol);
    exports.stock = stock;
    const market = stock('market');
    exports.market = market;
});
//# sourceMappingURL=index.js.map