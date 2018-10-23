// Dependencies.
import {fetch} from './lib'
import {reference} from './reference'
import {stock as s} from './stock'
const stock = (symbol?: string) => new s(symbol)
const market = stock('market')

// Export.
export {fetch, market, reference, stock}