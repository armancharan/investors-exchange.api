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
// Stock.
class stock {
    // Constructor.
    constructor(symbol) {
        // Book.
        this.book = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/book'); });
        // Chart.
        this.chart = (range) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(`/chart/${range || '1m'}`); });
        // Collection.
        this.collection = (type, name) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(`/collection/${type}`, { collectionName: name }); });
        // Company.
        this.company = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/company'); });
        // Crypto.
        this.crypto = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/crypto'); });
        // Delayed Quote.
        this.delayed_quote = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/delayed_quote'); });
        // Dividends.
        this.dividends = (range) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(`/dividends/${range || '1m'}`); });
        // Earnings.
        this.earnings = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/earnings'); });
        // Effective Spread.
        this.effective_spread = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/effective-spread'); });
        // Financials.
        this.financials = (options) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(this.path('/financials'), options); });
        // Handle.
        this.handle = (route, params) => __awaiter(this, void 0, void 0, function* () {
            const { path } = this;
            return yield lib_1.fetch(path(route), params);
        });
        // IPOS.
        this.ipos = (when) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(`/${when || 'upcoming'}-ipos`); });
        // Historical Prices.
        this.historical = this.chart;
        // Largest Trades.
        this.largest_trades = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/largest-trades'); });
        // List.
        this.list = (category) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(`/list/${category}`); });
        // Logo.
        this.logo = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/logo'); });
        // News.
        this.news = (last) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(`/news/last/${last || 1}`); });
        // OHLC.
        this.ohlc = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/ohlc'); });
        // Open Close.
        this.openclose = this.ohlc;
        // Path.
        this.path = (extension) => `/stock/${this.symbol}${extension}`;
        // Peers.
        this.peers = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/peers'); });
        // Price.
        this.price = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/price'); });
        // Previous.
        this.previous = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/previous'); });
        // Quote.
        this.quote = (options) => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/quote', options); });
        // Relevant.
        this.relevant = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/relevant'); });
        // Sector Performance.
        this.sector_performance = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/sector-performance'); });
        // Short Interest.
        this.short_interest = (date) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(`/short-interest/${date || ''}`); });
        // Splits.
        this.splits = (range) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(`/splits/${range || '1m'}`); });
        // Effective Spread.
        this.spread = this.effective_spread;
        // Key Statistics.
        this.stats = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/stats'); });
        // Regulation SHO Threshold Securities.
        this.threshold_securities = (date) => __awaiter(this, void 0, void 0, function* () { return yield this.handle(`/threshold-securities/${date || ''}`); });
        // Time Series.
        this.time_series = this.chart;
        // Today Earnings.
        this.today_earnings = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/today-earnings'); });
        // Volume By Venue.
        this.volume_by_venue = () => __awaiter(this, void 0, void 0, function* () { return yield this.handle('/volume-by-venue'); });
        this.symbol = (symbol || 'market').toLowerCase();
        return this;
    }
}
exports.stock = stock;
//# sourceMappingURL=index.js.map