
// Dependencies.
import IEX from '../index.js'
import reference from '../reference'
import stock from '../stock'

// IEX.
describe('IEX', () => {
  it('Exists', () => expect(IEX).toBeTruthy())
  test('Market', () => expect(IEX.market() instanceof stock).toBeTruthy())
  test('Reference', () => expect(IEX.reference() instanceof reference).toBeTruthy())
  test('Stock', () => expect(IEX.stock() instanceof stock).toBeTruthy())
})