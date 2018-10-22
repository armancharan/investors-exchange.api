// Dependencies.
import IEX from '../index'
// import reference from '../reference'
// import stock from '../stock'

// IEX.
describe('IEX', () => {
  it('Exists', () => expect(IEX).toBeTruthy())
  test('Market', () => expect(IEX.market).toBeTruthy())
  test('Reference', () => expect(IEX.reference).toBeTruthy())
  test('Stock', () => expect(IEX.stock('SNAP')).toBeTruthy())
})