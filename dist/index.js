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
const IEX = { fetch: lib_1.fetch, market, reference: reference_1.reference, stock };
exports.default = IEX;
//# sourceMappingURL=index.js.map