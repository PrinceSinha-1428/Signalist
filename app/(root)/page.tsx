import TradingViewWidget from '@/components/TradingViewWidget'
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from '@/lib/constants'
import React from 'react'

const Home: React.FC = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`
  return (
    <div className='flex min-h-screen home-wrapper'>
      <section className='grid w-full gap-8 home-section'>
        <div className='md:col-span-1 xl:col-span-1'>
          <TradingViewWidget
            title='Market Overview'
            scriptUrl={`${scriptUrl}market-overview.js`}
            className='custom-chart'
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
          />
        </div>
        <div className='md:col-span-1 xl:col-span-2'>
          <TradingViewWidget
            title='Stock Heatmap'
            scriptUrl={`${scriptUrl}stock-heatmap.js`}
            className='custom-chart'
            config={HEATMAP_WIDGET_CONFIG}
          />
        </div>
      </section>
      <section className='grid w-full gap-8 home-section'>
        <div className='h-full md:col-span-1 xl:col-span-1'>
          <TradingViewWidget
            scriptUrl={`${scriptUrl}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
          />
        </div>
        <div className='md:col-span-1 xl:col-span-2'>
          <TradingViewWidget
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
