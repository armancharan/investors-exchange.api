// Dependencies.
import IEX from '../index'

// Market.
describe('MARKET', () => {
  const market = IEX.market
  test('Crypto', async () => await market.crypto())
  test('Gainers', async () => await market.list('gainers'))
  test('Previous', async () => await market.previous())
  test('Threshold', async () => await market.threshold_securities())
  test('Short Interest List', async () => await market.short_interest())
})

