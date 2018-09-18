// Dependencies.
import {fetch, notAnObject} from '../lib'

// Stock.
class stock {
  
  // Constructor.
  constructor(...params) {
    const [symbol = 'market'] = params
    this.symbol = symbol.toLowerCase()
    return this
  }

  // Book.
  book = async () => await this.handle('/book')

  // Chart.
  chart = async (...range) => await this.handle(`/chart/${range ? range.join('/') : '1m'}`)

  // Collection.
  collection = async (type, collectionName) => await this.handle(`/collection/${type}`, {collectionName})

  // Company.
  company = async () => await this.handle('/company')

  // Crypto.
  crypto = async () => await this.handle('/crypto')

  // Delayed Quote.
  delayed_quote = async () => await this.handle('/delayed_quote')

  // Dividends.
  dividends = async range => await this.handle(`/dividends/${range || '1m'}`)

  // Earnings.
  earnings = async () => await this.handle('/earnings')
  
  // Effective Spread.
  effective_spread = async () => await this.handle('/effective-spread')

  // Financials.
  financials = async ({period} = {period: 'quarter'}) => await this.handle(path('/financials'), {period})

  // Handle.
  handle = async (route, params) => {
    const {path, symbol} = this
    return await fetch(path(route), params)
  }

  // IPOS.
  ipos = async (when = 'upcoming') => await this.handle(`/${when}-ipos`)

  // Historical Prices.
  historical = this.chart

  // Largest Trades.
  largest_trades = async () => await this.handle('/largest-trades')

  // List.
  list = async category => await this.handle(`/list/${category}`)

  // Logo.
  logo = async () => await this.handle('/logo')

  // News.
  news = async range => await this.handle(`/news/last/${range || 1}`)

  // OHLC.
  ohlc = async () => await this.handle('/ohlc')

  // Open Close.
  openclose = this.ohlc

  // Path.
  path = extension => `/stock/${this.symbol}${extension}`

  // Peers.
  peers = async () => await this.handle('/peers')

  // Price.
  price = async () => await this.handle('/price')

  // Previous.
  previous = async () => await this.handle('/previous')

  // Quote.
  quote = async ({displayPercent} = {}) => await this.handle('/quote', {displayPercent})

  // Relevant.
  relevant = async () => await this.handle('/relevant')

  // Sector Performance.
  sector_performance = async () => await this.handle('/sector-performance')

  // Short Interest.
  short_interest = async date => await this.handle(`/short-interest/${date || ''}`)

  // Splits.
  splits = async range => await this.handle(`/splits/${range || '1m'}`)

  // Effective Spread.
  spread = async () => await this.handle('/effective-spread')

  // Key Statistics.
  stats = async () => await this.handle('/stats')

  // Regulation SHO Threshold Securities.
  threshold_securities = async date => await this.handle(`/threshold-securities/${date || ''}`)

  // Time Series.
  time_series = this.chart

  // Today Earnings.
  today_earnings = async () => await this.handle('/today-earnings')

  // Volume By Venue.
  volume_by_venue = async () => await this.handle('/volume-by-venue')

}

// Export.
export default (...params) => new stock(...params)