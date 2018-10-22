// Dependencies.
import IEX from '../index'
const {reference} = IEX

// Reference.
describe('REFERENCE', () => {
  test('Corporate Actions', async () => await reference.corporate_actions())
  test('Dividends', async () => await reference.dividends())
  test('Next Day Ex Date', async () => await reference.next_day_ex_date())
  test('Symbols', async () => await reference.symbols())
  test('Symbols Directory', async () => await reference.symbol_directory())
})