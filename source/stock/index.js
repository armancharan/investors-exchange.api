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
  book = async () => await this.handle('book', '/book')

  // Chart.
  chart = async (...range) => await this.handle('chart', `/chart/${range ? range.join('/') : '1m'}`)

  // Company.
  company = async () => await this.handle('company', '/company')

  // Crypto.
  crypto = async () => await this.handle('crypto', '/crypto')

  // Delayed Quote.
  delayed_quote = async percent => await this.quote({delayed: true, percent: percent})

  // Dividends.
  dividends = async range => await this.handle('dividends', `/dividends/${range || '1m'}`)

  // Earnings.
  earnings = async () => await this.handle('earnings', '/earnings')

  // Financials.
  financials = async () => await this.handle('financials', '/financials')

  // Handle.
  handle = async (name, route, params) => {
    const {path, symbol} = this
    return await fetch(name, path(route), params)
  }

  // Historical Prices.
  historical = this.chart

  // Largest Trades.
  largest_trades = async () => await this.handle('largest_trades', '/largest-trades')

  // List.
  list = async category => await this.handle(`list:${category}`, `/list/${category}`)

  // Logo.
  logo = async () => await this.handle('logo', '/logo')

  // News.
  news = async range => await this.handle('news', `/news/last/${range || 1}`)

  // OHLC.
  ohlc = async () => ({symbol: this.symbol, ...await this.handle('ohlc', '/ohlc')})

  // Open Close.
  openclose = this.ohlc

  // Path.
  path = extension => `/stock/${this.symbol}${extension}`

  // Peers.
  peers = async () => await this.handle('peers', '/peers')

  // Price.
  price = async () => await this.handle('price', '/price')

  // Previous.
  previous = async () => await this.handle('previous', '/previous')

  // Quote.
  quote = async ({delayed, percent} = {}) => {
    const {handle} = this
    const params = percent && {displayPercent: true}
    if (delayed) return await handle('delayed_quote', '/delayed-quote', params)
    else return await this.handle('quote', '/quote', params)
  }

  // Relevant.
  relevant = async () => await this.handle('relevant', '/relevant')

  // Short Interest.
  short_interest = async date => await this.handle('short_interest', `/short-interest/${date || ''}`)

  // Splits.
  splits = async range => await this.handle('splits', `/splits/${range || '1m'}`)

  // Effective Spread.
  spread = async () => await this.handle('spread', '/effective-spread')

  // Key Statistics.
  stats = async () => await this.handle('stats', '/stats')

  // Regulation SHO Threshold Securities.
  threshold_securities = async date => await this.handle('threshold_securities', `/threshold-securities/${date || ''}`)

  // Time Series.
  time_series = this.chart

  // Volume By Venue.
  volume_by_venue = async () => await this.handle('volume_by_venue', '/volume-by-venue')

}

// Export.
export default (...params) => new stock(...params)