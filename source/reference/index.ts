// Dependencies.
import {fetch} from '../lib'
import {CorporateAction, ExDate, IEXDividend, IEXListedSecurity, Symbol} from '../lib/types'

// Path.
const path = (extension: string) => `/ref-data${extension}`

// Reference.
const reference = {

  // Corporate Actions.
  corporate_actions: async (date?: string): Promise<CorporateAction[]> => await fetch(path(`/daily-list/corporate-actions${date ? `/${date}` : ''}`)),

  // Dividends.
  dividends: async (date?: string): Promise<IEXDividend[]> => await fetch(path(`/daily-list/dividends${date ? `/${date}` : ''}`)),

  // Next Day Ex Date.
  next_day_ex_date: async (date?: string): Promise<ExDate[]> => await fetch(path(`/daily-list/next-day-ex-date${date ? `/${date}` : ''}`)),

  // Symbols.
  symbols: async (format = 'json'): Promise<Symbol[]> => await fetch(path('/symbols'), {format}),

  // Symbol Directory.
  symbol_directory: async (date?: string): Promise<IEXListedSecurity[]> => await fetch(path(`/daily-list/symbol-directory${date ? `/${date}` : ''}`))

}

// Export.
export default reference