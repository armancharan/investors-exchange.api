import { Article, Book, Chart, Collection, Company, DelayedQuote, Dividend, Earnings, EffectiveSpread, Financials, IPOData, List, Logo, OHLC, Performance, PriceData, Quote, Relevant, ShortInterest, Split, Stats, ThresholdSecurity, Trade, VenueVolume } from '../lib/types';
export declare class stock {
    constructor(symbol?: string);
    book: () => Promise<Book>;
    chart: (range?: string | undefined) => Promise<Chart>;
    collection: (type: Collection.Type, name: string) => Promise<Quote[]>;
    company: () => Promise<Company>;
    crypto: () => Promise<Quote[]>;
    delayed_quote: () => Promise<DelayedQuote>;
    dividends: (range?: string | undefined) => Promise<Dividend[]>;
    earnings: () => Promise<Earnings>;
    effective_spread: () => Promise<EffectiveSpread[]>;
    financials: (options?: {
        period: "annual" | "quarter";
    } | undefined) => Promise<Financials>;
    handle: (route: string, params?: object | undefined) => Promise<any>;
    ipos: (when: "today" | "upcoming") => Promise<IPOData>;
    historical: (range?: string | undefined) => Promise<Chart>;
    largest_trades: () => Promise<Trade[]>;
    list: (category: List) => Promise<Quote[]>;
    logo: () => Promise<Logo>;
    news: (last: number) => Promise<Article[]>;
    ohlc: () => Promise<OHLC>;
    openclose: () => Promise<OHLC>;
    path: (extension: string) => string;
    peers: () => Promise<string[]>;
    price: () => Promise<number>;
    previous: () => Promise<PriceData>;
    quote: (options?: {
        displayPercent?: boolean | undefined;
    } | undefined) => Promise<Quote>;
    relevant: () => Promise<Relevant>;
    sector_performance: () => Promise<Performance>;
    short_interest: (date?: string | undefined) => Promise<ShortInterest[]>;
    splits: (range?: string | undefined) => Promise<Split[]>;
    spread: () => Promise<EffectiveSpread[]>;
    stats: () => Promise<Stats>;
    symbol: string;
    threshold_securities: (date?: string | undefined) => Promise<ThresholdSecurity[]>;
    time_series: (range?: string | undefined) => Promise<Chart>;
    today_earnings: () => Promise<Earnings[]>;
    volume_by_venue: () => Promise<VenueVolume[]>;
}
