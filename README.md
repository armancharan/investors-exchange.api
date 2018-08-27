# investors-exchange.api
Unaffiliated JavaScript API for the IEX Developer Platform - https://iextrading.com

## Installation

```
npm install investors-exchange.api
```

## Getting Started

```
import IEX from 'investors-exchange.api'
```

## Stock Queries

```
const AAPL = await IEX.stock('AAPL')
const book = await AAPL.book()
const chart = await AAPL.chart(range)
const company = await AAPL.company()
const dividends = await AAPL.dividends()
const earnings = await AAPL.earnings()
const financials = await AAPL.financials()
const historical = await AAPL.historical()
const largest_trades = await AAPL.largest_trades()
const logo = await AAPL.logo()
const news = await AAPL.news()
const ohlc = await AAPL.ohlc()
const peers = await AAPL.peers()
const previous = await AAPL.previous()
const price = await AAPL.price()
const quote = await AAPL.quote()
const relevant = await AAPL.relevant()
const splits = await AAPL.splits(range)
const time_series = await AAPL.time_series()
const volume_by_venue = await AAPL.volume_by_venue()
const spread = await AAPL.spread()
const stats = await AAPL.stats()
const quote = await AAPL.quote({delayed: bool, percent: bool})
```

## Market Queries

```
const market = IEX.market
const crypto = await market.crypto()
const gainers = await market.list(type)
const previous = await market.previous()
const threshold_securities = await market.threshold_securities()
const short_interest = await market.short_interest()
```

## Reference Queries

```
const reference = IEX.reference
const corporate_actions = await reference.corporate_actions(date)
const dividends = await reference.dividends(date)
const next_day_ex_date = await reference.next_day_ex_date(date)
const symbols = await ref.symbols(csv: bool)
const symbol_directory = await reference.symbol_directory(date)
```