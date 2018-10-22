// Dependencies.
import IEX from '../index'

// Globals.
const AAPL = IEX.stock('AAPL')

// Stock.
describe('STOCK', () => {
  test('Book', async () => {
    const {quote} = await AAPL.book()
    expect(quote.symbol).toBe('AAPL')
    expect(quote.companyName).toBe('Apple Inc.')
  })
  test('Chart - Dynamic', async () => await AAPL.chart('dynamic'))
  test('Chart - Dated', async () => AAPL.chart('date/20180713'))
  test('Company', async () => await AAPL.company())
  test('Dividends', async () => await AAPL.dividends('5y'))
  test('Earnings', async () => await AAPL.earnings())
  test('Financials', async () => await AAPL.financials())
  test('Historical', async () => await AAPL.historical()) 
  test('Largest Trades', async () => await AAPL.largest_trades())
  test('Logo', async () => await AAPL.logo())
  test('News', async () => await AAPL.news(3))
  test('OHLC', async () => await AAPL.ohlc())
  test('Peers', async () => await AAPL.peers())
  test('Previous', async () => await AAPL.previous())
  test('Price', async () => await AAPL.price()) 
  test('Quote', async () => await AAPL.quote())
  test('Relevant', async () => await AAPL.relevant())
  test('Splits', async () => await AAPL.splits())
  test('Time Series', async () => await AAPL.time_series())
  test('Volume By Venue', async () => await AAPL.volume_by_venue())
  test('Spread', async () => await AAPL.spread())
  test('Stats', async () => await AAPL.stats())
  test('Quote - Percent', async () => await AAPL.quote({displayPercent: true}))
  test('Quote - Delayed', async () => await AAPL.delayed_quote())
})