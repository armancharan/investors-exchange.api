
// Dependencies.
import stock from '../stock'

// Market.
describe('MARKET', () => {
  const market = stock()
  it('can retrieve 5 articles of news', async () => expect((await market.news(5)).news.length).toBe(5))
  test('Previous', async () => await market.previous())
  test('Threshold', async () => await market.threshold_securities())
  test('Short Interest List', async () => await market.short_interest())
})

