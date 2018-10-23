// Dependencies.
import {fetch} from './lib'
import {reference} from './reference'
import {stock as s} from './stock'
const stock = (symbol?: string) => new s(symbol)
const market = stock('market')

// IEX.
const IEX = {fetch, market, reference, stock}

// Export.
export {fetch, market, reference, stock}
export default IEX