
// Dependencies.
import {fetch, notAnObject} from '../lib'

// Path.
const path = extension => `/ref-data${extension}`

// Reference.
const reference = {}

// Corporate Actions.
reference.corporate_actions = async date => await fetch('corporate_actions', path(`/daily-list/corporate-actions${date ? `/${date}` : ''}`))

// Dividends.
reference.dividends = async date => await fetch('dividends', path(`/daily-list/dividends${date ? `/${date}` : ''}`))

// Next Day Ex Date.
reference.next_day_ex_date = async date => await fetch('next_day_ex_date', path(`/daily-list/next-day-ex-date${date ? `/${date}` : ''}`))

// Symbols.
reference.symbols = async csv => await fetch('symbols', path('/symbols'), csv && {csv})

// Symbol Directory.
reference.symbol_directory = async date => await fetch('symbol_directory', path(`/daily-list/symbol-directory${date ? `/${date}` : ''}`))

// Export.
export default reference