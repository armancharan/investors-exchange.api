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
  book = this.handle('book', '/book')

  // Chart.
  chart = async (...range) => await this.handle('chart', `/chart/${range ? range.join('/') : '1m'}`)

  // Company.
  company = this.handle('company', '/company')

  // Crypto.
  crypto = this.handle('crypto', '/crypto')

  // Delayed Quote.
  delayed_quote = this.handle('delayed_quote', '/delayed_quote')

  // Dividends.
  dividends = async range => await this.handle('dividends', `/dividends/${range || '1m'}`)

  // Earnings.
  earnings = this.handle('earnings', '/earnings')
  
  // Effective Spread.
  effective_spread = this.handle('effective_spread', '/effective-spread')

  // Financials.
  financials = this.handle('financials', '/financials')

  // Handle.
  handle = async (name, route, params) => {
    const {path, symbol} = this
    return await fetch(name, path(route), params)
  }

  // Historical Prices.
  historical = this.chart

  // Largest Trades.
  largest_trades = this.handle('largest_trades', '/largest-trades')

  // List.
  list = async category => await this.handle(`list:${category}`, `/list/${category}`)

  // Logo.
  logo = this.handle('logo', '/logo')

  // News.
  news = async range => await this.handle('news', `/news/last/${range || 1}`)

  // OHLC.
  ohlc = this.handle('ohlc', '/ohlc')

  // Open Close.
  openclose = this.ohlc

  // Path.
  path = extension => `/stock/${this.symbol}${extension}`

  // Peers.
  peers = this.handle('peers', '/peers')

  // Price.
  price = this.handle('price', '/price')

  // Previous.
  previous = this.handle('previous', '/previous')

  // Quote.
  quote = async ({delayed, percent} = {}) => {
    const {handle} = this
    const params = percent && {displayPercent: true}
    if (delayed) return await handle('delayed_quote', '/delayed-quote', params)
    else return await handle('quote', '/quote', params)
  }

  // Relevant.
  relevant = this.handle('relevant', '/relevant')

  // Short Interest.
  short_interest = async date => await this.handle('short_interest', `/short-interest/${date || ''}`)

  // Splits.
  splits = async range => await this.handle('splits', `/splits/${range || '1m'}`)

  // Effective Spread.
  spread = this.handle('spread', '/effective-spread')

  // Key Statistics.
  stats = this.handle('stats', '/stats')

  // Regulation SHO Threshold Securities.
  threshold_securities = async date => await this.handle('threshold_securities', `/threshold-securities/${date || ''}`)

  // Time Series.
  time_series = this.chart

  // Today Earnings.
  today_earnings = this.handle('today_earnings', '/today-earnings')

  // Volume By Venue.
  volume_by_venue = this.handle('volume_by_venue', '/volume-by-venue')

}

// Export.
export default (...params) => new stock(...params)