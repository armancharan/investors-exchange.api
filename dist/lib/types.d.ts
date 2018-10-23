export interface Article {
    datetime: string;
    headline: string;
    source: string;
    url: string;
    summary: string;
    related: string;
    image: string;
}
export interface Book {
    quote: Quote;
    bids: any[];
    asks: any[];
    trades: any[];
    systemEvent: object;
}
export interface Chart {
    date: number;
    minute: string;
    label: string;
    high: number;
    low: number;
    average: number;
    volume: number;
    notional: number;
    numberOfTrades: number;
    marktHigh: number;
    marketLow: number;
    marketAverage: number;
    marketVolume: number;
    marketNotional: number;
    marketNumberOfTrades: number;
    open: number;
    close: number;
    marktOpen: number;
    marketClose: number;
    changeOverTime: number;
    marketChangeOverTime: number;
}
export declare namespace Collection {
    type Type = 'list' | 'sector' | 'tag';
    type Name = List | Sector | string;
}
export interface Company {
    symbol: string;
    companyName: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    CEO: string;
    issueType: string;
    sector: Sector;
    tags: Sector[];
}
export interface CorporateAction {
    RecordID: string;
    DailyListTimestamp: string;
    EffectiveDate: string;
    IssueEvent: string;
    CurrentSymbolinINETSymbology: string;
    CurrentSymbolinCQSSymbology: string;
    CurrentSymbolinCMSSymbology: string;
    NewSymbolinINETSymbology: string;
    NewSymbolinCQSSymbology: string;
    NewSymbolinCMSSymbology: string;
    CurrentSecurityName: string;
    NewSecurityName: string;
    CurrentCompanyName: string;
    NewCompanyName: string;
    CurrentListingCenter: string;
    NewListingCenter: string;
    DelistingReason: string;
    CurrentRoundLotSize: string;
    NewRoundLotSize: string;
    CurrentLULDTierIndicator: string;
    NewLULDTierIndicator: string;
    ExpirationDate: string;
    SeparationDate: string;
    SettlementDate: string;
    MaturityDate: string;
    RedemptionDate: string;
    CurrentFinancialStatus: string;
    NewFinancialStatus: string;
    WhenIssuedFlag: string;
    WhenDistributedFlag: string;
    IPOFlag: string;
    NotesforEachEntry: string;
    RecordUpdateTime: string;
}
export interface DelayedQuote {
    symbol: string;
    delayedPrice: number;
    delayedSize: number;
    delayedPriceTime: number;
    processedTime: number;
}
export interface IEXListedSecurity {
    RecordID: string;
    DailyListTimestamp: string;
    SymbolinINETSymbology: string;
    SymbolinCQSSymbology: string;
    SymbolinCMSSymbology: string;
    SecurityName: string;
    CompanyName: string;
    TestIssue: string;
    IssueDescription: string;
    IssueType: string;
    IssueSubType: string;
    SICCode: string;
    TransferAgent: string;
    FinancialStatus: string;
    RoundLotSize: string;
    PreviousOfficialClosingPrice: string;
    AdjustedPreviousOfficialClosingPrice: string;
    WhenIssuedFlag: string;
    WhenDistributedFlag: string;
    IPOFlag: string;
    FirstDateListed: string;
    LULDTierIndicator: string;
    CountryofIncorporation: string;
    LeveragedETPFlag: string;
    LeveragedETPRatio: string;
    InverseETPFlag: string;
    RecordUpdateTime: string;
}
export interface Dividend {
    exDate: string;
    paymentDate: string;
    recordDate: string;
    declaredDate: string;
    amount: number;
    type: 'Dividend income';
    qualified: 'Q';
}
export interface Earnings {
    symbol: string;
    earnings: EarningsReport[];
}
export interface EarningsReport {
    actualEPS: number;
    consensusEPS: number;
    estimatedEPS: number;
    announceTime: string;
    numberOfEstimates: number;
    EPSSurpriseDollar: number;
    EPSReportDate: string;
    fiscalPeriod: string;
    fiscalEndDate: string;
    yearAgo: number;
    yearAgoChangePercent: number;
    estimatedChangePercent: number;
    symbolId: number;
}
export interface EarningsReportToday extends EarningsReport {
    symbol: string;
    quote: Quote;
    headline: string;
}
export interface EarningsToday {
    bto: EarningsReportToday;
    amc: EarningsReportToday;
}
export interface EffectiveSpread {
    volume: number;
    venue: string;
    venueName: string;
    effectiveSpread: number;
    effectiveQuoted: number;
    priceImprovement: number;
}
export interface ExDate {
    RecordID: string;
    DailyListTimestamp: string;
    ExDate: string;
    SymbolinINETSymbology: string;
    SymbolinCQSSymbology: string;
    SymbolinCMSSymbology: string;
    SecurityName: string;
    CompanyName: string;
    DividendTypeID: string;
    AmountDescription: string;
    PaymentFrequency: string;
    StockAdjustmentFactor: string;
    StockAmount: string;
    CashAmount: string;
    PostSplitShares: string;
    PreSplitShares: string;
    QualifiedDividend: string;
    ExercisePriceAmount: string;
    ElectionorExpirationDate: string;
    GrossAmount: string;
    NetAmount: string;
    BasisNotes: string;
    NotesforEachEntry: string;
    RecordUpdateTime: string;
}
export interface Fetch {
    (path: string, params?: object): any;
}
export interface Financials {
    symbol: string;
    financials: FinancialReport[];
}
export interface FinancialReport {
    reportDate: string;
    grossProfit: number;
    costOfRevenue: number;
    operatingRevenue: number;
    totalRevenue: number;
    operatingIncome: number;
    netIncome: number;
    researchAndDevelopment: number;
    operatingExpense: number;
    currentAssets: number;
    totalAssets: number;
    totalLiabilities: number;
    currentCash: number;
    currentDebt: number;
    totalCash: number;
    totalDebt: number;
    shareholderEquity: number;
    cashChange: number;
    cashFlow: number;
    operatingGainsLosses: null;
}
export interface IEXDividend {
    RecordID: string;
    DailyListTimestamp: string;
    EventType: string;
    SymbolinINETSymbology: string;
    SymbolinCQSSymbology: string;
    SymbolinCMSSymbology: string;
    SecurityName: string;
    CompanyName: string;
    DeclarationDate: string;
    AmountDescription: string;
    PaymentFrequency: string;
    ExDate: string;
    RecordDate: string;
    PaymentDate: string;
    DividendTypeID: string;
    StockAdjustmentFactor: string;
    StockAmount: string;
    CashAmount: string;
    PostSplitShares: string;
    PreSplitShares: string;
    QualifiedDividend: string;
    ExercisePriceAmount: string;
    ElectionorExpirationDate: string;
    GrossAmount: string;
    NetAmount: string;
    BasisNotes: string;
    NotesforEachEntry: string;
    RecordUpdateTime: string;
}
export interface IPOData {
    rawData: RawData[];
    viewData: ViewData[];
}
export declare type List = 'mostactive' | 'gainers' | 'losers' | 'iexvolume' | 'iexpercent' | 'infocus';
export interface Logo {
    url: string;
}
export interface OHLC {
    open: {
        price: number;
        time: number;
    };
    close: {
        price: number;
        time: number;
    };
    high: number;
    low: number;
}
export declare type Peers = string[];
export interface Performance {
    type: string;
    name: string;
    performance: number;
    lastUpdated: number;
}
export declare type Price = number;
export interface PriceData {
    symbol: string;
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    unadjustedVolume: number;
    change: number;
    changePercent: number;
    vwap: number;
}
export interface Quote {
    symbol: string;
    companyName: string;
    primaryExchange: string;
    sector: string;
    calculationPrice: string;
    open: number;
    openTime: number;
    close: number;
    closeTime: number;
    high: number;
    low: number;
    latestPrice: number;
    latestSource: string;
    latestTime: string;
    latestUpdate: number;
    latestVolume: number;
    iexRealtimePrice: number;
    iexRealtimeSize: number;
    iexLastUpdated: number;
    delayedPrice: number;
    delayedPriceTime: number;
    extendedPrice: number;
    extendedChange: number;
    extendedChangePercent: number;
    extendedPriceTime: number;
    previousClose: number;
    change: number;
    changePercent: number;
    iexMarketPercent: number;
    iexVolume: number;
    avgTotalVolume: number;
    iexBidPrice: number;
    iexBidSize: number;
    iexAskPrice: number;
    iexAskSize: number;
    marketCap: number;
    peRatio: number;
    week52High: number;
    week52Low: number;
    ytdChange: number;
}
export declare type Range = 'dynamic' | '1d' | '1m' | '3m' | '6m' | 'ytd' | '1y' | '2y' | '5y' | string;
export interface RawData {
    symbol: string;
    companyName: string;
    expectedDate: string;
    leadUnderwriters: string[];
    underwriters: string[];
    companyCounsel: string[];
    underwriterCounsel: string[];
    auditor: string;
    market: string;
    cik: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    ceo: string;
    employees: number;
    url: string;
    status: string;
    sharesOffered: number;
    priceLow: number;
    priceHigh: number;
    offerAmount: number;
    totalExpenses: number;
    sharesOverAlloted: number;
    shareholderShares: null;
    sharesOutstanding: number;
    lockupPeriodExpiration: string;
    quietPeriodExpiration: string;
    revenue: number;
    netIncome: number;
    totalAssets: number;
    totalLiabilities: number;
    stockholderEquity: number;
    companyDescription: string;
    businessDescription: string;
    useOfProceeds: string;
    competition: string;
    amount: number;
    percentOffered: string;
}
export interface Relevant {
    peers: boolean;
    symbols: string[];
}
export declare type Sector = 'Financials' | 'Health Care' | 'Consumer Staples' | 'Communication Services' | 'Utilities' | 'Real Estate' | 'Technology' | 'Energy' | 'Materials' | 'Industrials' | 'Consumer Discretionarystring';
export interface ShortInterest {
    SettlementDate: string;
    SecurityName: string;
    CurrentShortInterest: number;
    PreviousShortInterest: number;
    PercentChange: number;
    AverageDailyVolume: number;
    DaystoCover: number;
    StockAdjustmentFlag: string;
    RevisionFlag: string;
    SymbolinINETSymbology: string;
    SymbolinCQSSymbology: string;
    SymbolinCMSSymbology: string;
    NewIssueFlag: string;
    CompanyName: string;
}
export interface Split {
    exDate: string;
    declaredDate: string;
    recordDate: string;
    paymentDate: string;
    ratio: number;
    toFactor: number;
    forFactor: number;
}
export interface Stats {
    companyName: string;
    marketcap: number;
    beta: number;
    week52high: number;
    week52low: number;
    week52change: number;
    shortInterest: number;
    shortDate: string;
    dividendRate: number;
    dividendYield: number;
    exDividendDate: string;
    latestEPS: number;
    latestEPSDate: string;
    sharesOutstanding: number;
    float: number;
    returnOnEquity: number;
    consensusEPS: number;
    numberOfEstimates: number;
    symbol: string;
    EBITDA: number;
    revenue: number;
    grossProfit: number;
    cash: number;
    debt: number;
    ttmEPS: number;
    revenuePerShare: number;
    revenuePerEmployee: number;
    peRatioHigh: number;
    peRatioLow: number;
    EPSSurpriseDollar: null;
    EPSSurprisePercent: number;
    returnOnAssets: number;
    returnOnCapital: null;
    profitMargin: number;
    priceToSales: number;
    priceToBook: number;
    day200MovingAvg: number;
    day50MovingAvg: number;
    institutionPercent: number;
    insiderPercent: null;
    shortRatio: number;
    year5ChangePercent: number;
    year2ChangePercent: number;
    year1ChangePercent: number;
    ytdChangePercent: number;
    month6ChangePercent: number;
    month3ChangePercent: number;
    month1ChangePercent: number;
    day5ChangePercent: number;
}
export interface Symbol {
    symbol: string;
    name: string;
    date: string;
    isEnabled: boolean;
    type: string;
    iexId: string;
}
export interface ThresholdSecurity {
    TradeDate: string;
    'SymbolinINET Symbology': string;
    'SymbolinCQS Symbology': string;
    'SymbolinCMS Symbology': string;
    SecurityName: string;
}
export interface Trade {
    price: number;
    size: number;
    time: number;
    timeLabel: string;
    venue: string;
    venueName: string;
}
export interface VenueVolume {
    volume: number;
    venue: string;
    venueName: string;
    marketPercent: number;
    avgMarketPercent: number;
    date: string;
}
export interface ViewData {
    Company: string;
    Symbol: string;
    Price: string;
    Shares: string;
    Amount: string;
    Float: string;
    Percent: string;
    Market: string;
    Expected: string;
}
