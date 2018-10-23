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
    // Stock.
    class stock {
        // Constructor.
        constructor(symbol) {
            // Book.
            this.book = async () => await this.handle('/book');
            // Chart.
            this.chart = async (range) => await this.handle(`/chart/${range || '1m'}`);
            // Collection.
            this.collection = async (type, name) => await this.handle(`/collection/${type}`, { collectionName: name });
            // Company.
            this.company = async () => await this.handle('/company');
            // Crypto.
            this.crypto = async () => await this.handle('/crypto');
            // Delayed Quote.
            this.delayed_quote = async () => await this.handle('/delayed_quote');
            // Dividends.
            this.dividends = async (range) => await this.handle(`/dividends/${range || '1m'}`);
            // Earnings.
            this.earnings = async () => await this.handle('/earnings');
            // Effective Spread.
            this.effective_spread = async () => await this.handle('/effective-spread');
            // Financials.
            this.financials = async (options) => await this.handle(this.path('/financials'), options);
            // Handle.
            this.handle = async (route, params) => {
                const { path } = this;
                return await lib_1.fetch(path(route), params);
            };
            // IPOS.
            this.ipos = async (when) => await this.handle(`/${when || 'upcoming'}-ipos`);
            // Historical Prices.
            this.historical = this.chart;
            // Largest Trades.
            this.largest_trades = async () => await this.handle('/largest-trades');
            // List.
            this.list = async (category) => await this.handle(`/list/${category}`);
            // Logo.
            this.logo = async () => await this.handle('/logo');
            // News.
            this.news = async (last) => await this.handle(`/news/last/${last || 1}`);
            // OHLC.
            this.ohlc = async () => await this.handle('/ohlc');
            // Open Close.
            this.openclose = this.ohlc;
            // Path.
            this.path = (extension) => `/stock/${this.symbol}${extension}`;
            // Peers.
            this.peers = async () => await this.handle('/peers');
            // Price.
            this.price = async () => await this.handle('/price');
            // Previous.
            this.previous = async () => await this.handle('/previous');
            // Quote.
            this.quote = async (options) => await this.handle('/quote', options);
            // Relevant.
            this.relevant = async () => await this.handle('/relevant');
            // Sector Performance.
            this.sector_performance = async () => await this.handle('/sector-performance');
            // Short Interest.
            this.short_interest = async (date) => await this.handle(`/short-interest/${date || ''}`);
            // Splits.
            this.splits = async (range) => await this.handle(`/splits/${range || '1m'}`);
            // Effective Spread.
            this.spread = this.effective_spread;
            // Key Statistics.
            this.stats = async () => await this.handle('/stats');
            // Regulation SHO Threshold Securities.
            this.threshold_securities = async (date) => await this.handle(`/threshold-securities/${date || ''}`);
            // Time Series.
            this.time_series = this.chart;
            // Today Earnings.
            this.today_earnings = async () => await this.handle('/today-earnings');
            // Volume By Venue.
            this.volume_by_venue = async () => await this.handle('/volume-by-venue');
            this.symbol = (symbol || 'market').toLowerCase();
            return this;
        }
    }
    exports.stock = stock;
});
//# sourceMappingURL=index.js.map