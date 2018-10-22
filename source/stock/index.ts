// Dependencies.
import {fetch} from '../lib'
import {Article, Book, Chart, Collection, Company, DelayedQuote, Dividend, Earnings, EffectiveSpread, Financials, IPOData, List, Logo, OHLC, Peers, Performance, Price, PriceData, Quote, Range, Relevant, ShortInterest, Split, Stats, ThresholdSecurity, Trade, VenueVolume} from '../lib/types'

// Stock.
class stock {

  // Constructor.
  constructor(symbol?: string) {
    this.symbol = (symbol || 'market').toLowerCase()
    return this
  }

  // Book.
  book = async (): Promise<Book> => await this.handle('/book')

  // Chart.
  chart = async (range?: Range | string): Promise<Chart> => await this.handle(`/chart/${range || '1m'}`)

  // Collection.
  collection = async (type: Collection.Type, name: Collection.Name): Promise<Quote[]> => await this.handle(`/collection/${type}`, {collectionName: name})

  // Company.
  company = async (): Promise<Company> => await this.handle('/company')

  // Crypto.
  crypto = async (): Promise<Quote[]> => await this.handle('/crypto')

  // Delayed Quote.
  delayed_quote = async (): Promise<DelayedQuote> => await this.handle('/delayed_quote')

  // Dividends.
  dividends = async (range?: Range): Promise<Dividend[]> => await this.handle(`/dividends/${range || '1m'}`)

  // Earnings.
  earnings = async (): Promise<Earnings> => await this.handle('/earnings')
  
  // Effective Spread.
  effective_spread = async (): Promise<EffectiveSpread[]> => await this.handle('/effective-spread')

  // Financials.
  financials = async (options?: {period: 'annual' | 'quarter'}): Promise<Financials> => await this.handle(this.path('/financials'), options)

  // Handle.
  handle = async (route: string, params?: object) => {
    const {path} = this
    return await fetch(path(route), params)
  }

  // IPOS.
  ipos = async (when: 'today' | 'upcoming'): Promise<IPOData> => await this.handle(`/${when || 'upcoming'}-ipos`)

  // Historical Prices.
  historical = this.chart

  // Largest Trades.
  largest_trades = async (): Promise<Trade[]> => await this.handle('/largest-trades')

  // List.
  list = async (category: List): Promise<Quote[]> => await this.handle(`/list/${category}`)

  // Logo.
  logo = async (): Promise<Logo> => await this.handle('/logo')

  // News.
  news = async (last: number): Promise<Article[]> => await this.handle(`/news/last/${last || 1}`)

  // OHLC.
  ohlc = async (): Promise<OHLC> => await this.handle('/ohlc')

  // Open Close.
  openclose = this.ohlc

  // Path.
  path = (extension: string) => `/stock/${this.symbol}${extension}`

  // Peers.
  peers = async (): Promise<Peers> => await this.handle('/peers')

  // Price.
  price = async (): Promise<Price> => await this.handle('/price')

  // Previous.
  previous = async (): Promise<PriceData> => await this.handle('/previous')

  // Quote.
  quote = async (options?: {displayPercent?: boolean}): Promise<Quote> => await this.handle('/quote', options)

  // Relevant.
  relevant = async (): Promise<Relevant> => await this.handle('/relevant')

  // Sector Performance.
  sector_performance = async (): Promise<Performance> => await this.handle('/sector-performance')

  // Short Interest.
  short_interest = async (date?: string): Promise<ShortInterest[]> => await this.handle(`/short-interest/${date || ''}`)

  // Splits.
  splits = async (range?: Range): Promise<Split[]> => await this.handle(`/splits/${range || '1m'}`)

  // Effective Spread.
  spread = this.effective_spread

  // Key Statistics.
  stats = async (): Promise<Stats> => await this.handle('/stats')

  symbol: string

  // Regulation SHO Threshold Securities.
  threshold_securities = async (date?: string): Promise<ThresholdSecurity[]> => await this.handle(`/threshold-securities/${date || ''}`)

  // Time Series.
  time_series = this.chart

  // Today Earnings.
  today_earnings = async (): Promise<Earnings[]> => await this.handle('/today-earnings')

  // Volume By Venue.
  volume_by_venue = async (): Promise<VenueVolume[]> => await this.handle('/volume-by-venue')

}

// Export.
export default stock