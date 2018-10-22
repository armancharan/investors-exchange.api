// Dependencies.
import {fetch} from './lib'
import reference from './reference'
import stock from './stock'
const s = (symbol?: string) => new stock(symbol)
const m = s('market')

// IEX.
class IEX {

  // Fetch.
  static fetch = fetch

  // Market.
  static market = m

  // Reference.
  static reference = reference

  // Stock.
  static stock = s

}

// Export.
export default IEX