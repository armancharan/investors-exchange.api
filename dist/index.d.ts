import { fetch } from './lib';
import { reference } from './reference';
import { stock as s } from './stock';
declare const stock: (symbol?: string | undefined) => s;
declare const market: s;
export { fetch, market, reference, stock };
