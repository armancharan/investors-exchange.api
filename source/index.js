// Dependencies.
import {fetch} from './lib'
import reference from './reference'
import stock from './stock'

// IEX.
class IEX {

  // Fetch.
  static fetch = fetch

  // Market.
  static market = stock()

  // Reference.
  static reference = reference

  // Stock.
  static stock = stock

}

// Export.
export default IEX