# Investors-Exchange.API

An unaffiliated JavaScript API for the IEX Developer Platform - [https://iextrading.com](https://iextrading.com/)


## Installation

    # NPM
    npm install investors-exchange.api --save
    
    # YARN
    yarn add investors-exchange.api
    

## Getting Started

    import IEX from 'investors-exchange.api'


## Miscellaneous Queries

**Fetch**

    // https://iextrading.com/developer/docs/#financials
    const endpoint = '/stock/snap/financials'
    const params = {period: 'annual'}
    const data = IEX.fetch(endpoint, params)


## Stock Queries

**[Stock](https://iextrading.com/developer/docs/#stocks)**

    const AAPL = IEX.stock('aapl') // Apple Inc.
    const GOOG = IEX.stock('GOOG') // Alphabet Inc.
    const SNAP = IEX.stock('Snap') // Snap Inc.

**[Book](https://iextrading.com/developer/docs/#book)**

    const book = await AAPL.book()

**[Chart](https://iextrading.com/developer/docs/#chart)**

    const chart = {}
    chart.default = await AAPL.chart() // 1 Month (default).
    chart.dynamic = await GOOG.chart('dynamic') // Dynamic
    chart.fiveYear = await GOOG.chart('5y') // 5 year.
    chart.specific = await SNAP.chart('20180730') // Specific Date.

**[Company](https://iextrading.com/developer/docs/#company)**

    const company = await AAPL.company()

**[Dividends](https://iextrading.com/developer/docs/#dividends)**

    const dividends = {}
    dividends.default = await SNAP.dividends() // 1 Month (default).
    dividends.ytd = await SNAP.dividends('ytd') // Year-To-Date.
    dividends.twoYear = await GOOG.dividends('2y') // 2 Year.

**[Earnings](https://iextrading.com/developer/docs/#earnings)**

    const earnings = await GOOG.earnings()

**[Earnings Today](https://iextrading.com/developer/docs/#earnings-today)**

    const today_earnings = await SNAP.today_earnings()

**[Effective Spread](https://iextrading.com/developer/docs/#effective-spread)**

    const effective_spread = await SNAP.effective_spread()

**[Financials](https://iextrading.com/developer/docs/#financials)**

    const financials = {}
    financials.quarter = await AAPL.financials()
    financials.annual = await AAPL.financials({period: 'annual'})

**[Historical Prices](https://iextrading.com/developer/docs/#historical-prices)**

    const historical = {}
    historical.default = await AAPL.historical() // 1 Month (default).
    historical.dynamic = await GOOG.historical('dynamic') // Dynamic
    historical.fiveYear = await GOOG.historical('5y') // 5 year.
    historical.specific = await SNAP.historical('20180730') // Specific Date.

**[Key Stats](https://iextrading.com/developer/docs/#key-stats)**

    const stats = await AAPL.stats()

**[Largest Trades](https://iextrading.com/developer/docs/#largest-trades)**

    const largest_trades = await AAPL.largest_trades()

**[Logo](https://iextrading.com/developer/docs/#logo)**

    const logo = await SNAP.logo()

**[News](https://iextrading.com/developer/docs/#news)**

    const news = {}
    news.last_1 = await SNAP.news() // Last Article.
    news.last_10 = await SNAP.news(10) // Last 10 Articles.

**[OHLC](https://iextrading.com/developer/docs/#ohlc)**

    const ohlc = await AAPL.ohlc()

**[Peers](https://iextrading.com/developer/docs/#peers)**

    const peers = await SNAP.peers()

**[Previous](https://iextrading.com/developer/docs/#previous)**

    const previous = await AAPL.previous()

**[Price](https://iextrading.com/developer/docs/#price)**

    const price = await GOOG.price()

**[Quote](https://iextrading.com/developer/docs/#quote)**

    const quote = {}
    quote.default = SNAP.quote()
    quote.percent = SNAP.quote({displayPercent: true}) // Display Percent.

**[Relevant](https://iextrading.com/developer/docs/#relevant)**

    const relevant = await AAPL.relevant()

**[Splits](https://iextrading.com/developer/docs/#splits)**

    const splits = {}
    splits.default = await AAPL.splits() // 1 Month (default).
    splits.fiveYear = await AAPL.splits('5y') // 5 Year.

**[Time Series](https://iextrading.com/developer/docs/#time-series)**

    const time_series = {}
    time_series.default = await GOOG.time_series() // 1 Month (default).
    time_series.ytd = await GOOG.time_series('ytd') // Year-To-Date.

**[Volume By Venue](https://iextrading.com/developer/docs/#volume-by-venue)**

    const volume_by_venue = await AAPL.volume_by_venue()


## Market Queries

**[Market](https://iextrading.com/developer/docs/#iex-market-data)**

    const market = IEX.market || IEX.stock()

**[Collections](https://iextrading.com/developer/docs/#collections)**

    const collections = {}
    collections.computer_hardware = await market.collection('tag', 'Computer%20Hardware')
    collections.health_care = await market.collection('sector', 'Health%20Care')

**[Crypto](https://iextrading.com/developer/docs/#crypto)**

    const crypto = await market.crypto()

**[IPO Calendar](https://iextrading.com/developer/docs/#ipo-calendar)**

    const IPOs = {}
    IPOs.upcoming = await market.ipos('upcoming')
    IPOs.today = await market.ipos('today')

**[List](https://iextrading.com/developer/docs/#list)**

    const list = {}
    list.gainers = await market.list('gainers') // Gainers.
    list.iex_volume = await market.list('iexvolume') // IEX Volume.
    list.iex_percent = await market.list('iexpercent') // IEX Percent.
    list.in_focus = await market.list('infocus') // In Focus.
    list.losers = await market.list('losers') // Losers.
    list.most_active = await market.list('mostactive') // Most Active.

**[Sector Performance](https://iextrading.com/developer/docs/#sector-performance)**

    const sector_performance = await market.sector_performance()

**[Short Interest](https://iextrading.com/developer/docs/#iex-short-interest-list)**

    const short_interest = {}
    short_interest.recent = await market.short_interest()
    short_interest.specific = await market.short_interest('20171210')

**[Threshold Securities](https://iextrading.com/developer/docs/#iex-regulation-sho-threshold-securities-list)**

    const threshold_securities = {}
    threshold_securities.recent = await market.threshold_securities()
    threshold_securities.specific = await market.threshold_securities('20171210')


## Reference Queries

**[Reference](https://iextrading.com/developer/docs/#reference-data)**

    const reference = IEX.reference

**[Corporate Actions](https://iextrading.com/developer/docs/#iex-corporate-actions)**

    const corporate_actions = {}
    corporate_actions.recent = await reference.corporate_actions() // Recent (default).
    corporate_actions.specific = await reference.corporate_actions('20171210') // Specific Date.

**[Dividends](https://iextrading.com/developer/docs/#iex-dividends)**

    const dividends = {} 
    dividends.recent = await reference.dividends()
    dividends.specific = await reference.dividends('20171210')

**[Next Day Ex Date](https://iextrading.com/developer/docs/#iex-next-day-ex-date)**

    const next_day_e x_date = {}
    next_day_ex_date.recent = await reference.next_day_ex_date() // Recent (default).
    next_day_ex_date.recent = await reference.next_day_ex_date('20171210') // Specific Date.

**[Symbols](https://iextrading.com/developer/docs/#symbols)**

    const symbols = {}
    symbols.json = await ref.symbols() // JSON Format.
    symbols.csv = await ref.symbols({format: 'csv'}) // CSV Format.

**[Symbols Directory](https://iextrading.com/developer/docs/#iex-listed-symbol-directory)**

    const symbol_directory = {}
    symbol_directory.recent = await reference.symbol_directory() // Recent (default).
    symbol_directory.specific = await reference.symbol_directory('20171210') // Specific Date.