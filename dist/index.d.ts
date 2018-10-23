import { fetch } from './lib';
import { reference } from './reference';
import { stock as s } from './stock';
declare const stock: (symbol?: string | undefined) => s;
declare const market: s;
declare const IEX: {
    fetch: import("./lib/types").Fetch;
    market: s;
    reference: {
        corporate_actions: (date?: string | undefined) => Promise<import("./lib/types").CorporateAction[]>;
        dividends: (date?: string | undefined) => Promise<import("./lib/types").IEXDividend[]>;
        next_day_ex_date: (date?: string | undefined) => Promise<import("./lib/types").ExDate[]>;
        symbols: (format?: "json" | "csv" | undefined) => Promise<import("./lib/types").Symbol[]>;
        symbol_directory: (date?: string | undefined) => Promise<import("./lib/types").IEXListedSecurity[]>;
    };
    stock: (symbol?: string | undefined) => s;
};
export { fetch, market, reference, stock };
export default IEX;
