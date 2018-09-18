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
  book = this.handle('/book')

  // Chart.
  chart = async (...range) => await this.handle(`/chart/${range ? range.join('/') : '1m'}`)

  // Company.
  company = this.handle('/company')

  // Crypto.
  crypto = this.handle('/crypto')

  // Delayed Quote.
  delayed_quote = this.handle('/delayed_quote')

  // Dividends.
  dividends = async range => await this.handle(`/dividends/${range || '1m'}`)

  // Earnings.
  earnings = this.handle('/earnings')
  
  // Effective Spread.
  effective_spread = this.handle('/effective-spread')

  // Financials.
  financials = async ({period = 'quarter'}) => await this.handle(path('/financials'), {period})

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
  largest_trades = this.handle('/largest-trades')

  // List.
  list = async category => await this.handle(`/list/${category}`)

  // Logo.
  logo = this.handle('/logo')

  // News.
  news = async range => await this.handle(`/news/last/${range || 1}`)

  // OHLC.
  ohlc = this.handle('/ohlc')

  // Open Close.
  openclose = this.ohlc

  // Path.
  path = extension => `/stock/${this.symbol}${extension}`

  // Peers.
  peers = this.handle('/peers')

  // Price.
  price = this.handle('/price')

  // Previous.
  previous = this.handle('/previous')

  // Quote.
  quote = async ({displayPercent} = {}) => await this.handle('/quote', {displayPercent})

  // Relevant.
  relevant = this.handle('/relevant')

  // Sector Performance.
  sector_performance = this.handle('/sector-performance')

  // Short Interest.
  short_interest = async date => await this.handle(`/short-interest/${date || ''}`)

  // Splits.
  splits = async range => await this.handle(`/splits/${range || '1m'}`)

  // Effective Spread.
  spread = this.handle('/effective-spread')

  // Key Statistics.
  stats = this.handle('/stats')

  // Regulation SHO Threshold Securities.
  threshold_securities = async date => await this.handle(`/threshold-securities/${date || ''}`)

  // Time Series.
  time_series = this.chart

  // Today Earnings.
  today_earnings = this.handle('/today-earnings')

  // Volume By Venue.
  volume_by_venue = this.handle('/volume-by-venue')

}

// Export.
export default (...params) => new stock(...params)