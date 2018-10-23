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
const lib_1 = require("../lib");
// Path.
const path = (extension) => `/ref-data${extension}`;
// Reference.
exports.reference = {
    // Corporate Actions.
    corporate_actions: (date) => __awaiter(this, void 0, void 0, function* () { return yield lib_1.fetch(path(`/daily-list/corporate-actions${date ? `/${date}` : ''}`)); }),
    // Dividends.
    dividends: (date) => __awaiter(this, void 0, void 0, function* () { return yield lib_1.fetch(path(`/daily-list/dividends${date ? `/${date}` : ''}`)); }),
    // Next Day Ex Date.
    next_day_ex_date: (date) => __awaiter(this, void 0, void 0, function* () { return yield lib_1.fetch(path(`/daily-list/next-day-ex-date${date ? `/${date}` : ''}`)); }),
    // Symbols.
    symbols: (format = 'json') => __awaiter(this, void 0, void 0, function* () { return yield lib_1.fetch(path('/symbols'), { format }); }),
    // Symbol Directory.
    symbol_directory: (date) => __awaiter(this, void 0, void 0, function* () { return yield lib_1.fetch(path(`/daily-list/symbol-directory${date ? `/${date}` : ''}`)); })
};
//# sourceMappingURL=index.js.map