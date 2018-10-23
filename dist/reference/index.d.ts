import { CorporateAction, ExDate, IEXDividend, IEXListedSecurity, Symbol } from '../lib/types';
declare type Format = 'json' | 'csv' | undefined;
export declare const reference: {
    corporate_actions: (date?: string | undefined) => Promise<CorporateAction[]>;
    dividends: (date?: string | undefined) => Promise<IEXDividend[]>;
    next_day_ex_date: (date?: string | undefined) => Promise<ExDate[]>;
    symbols: (format?: Format) => Promise<Symbol[]>;
    symbol_directory: (date?: string | undefined) => Promise<IEXListedSecurity[]>;
};
export {};
