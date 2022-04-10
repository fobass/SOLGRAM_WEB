import http from '@/http-common'
import { Stock, MarketChart } from '@/models/index'


class DataService {
    market(): Promise<Stock> {
        return http.get('/markets?vs_currency=usd')
    }

    chart(): Promise<MarketChart> {
        return http.get('/bitcoin/market_chart?vs_currency=usd&days=1')
        // return http.get('v1/bpi/historical/close.json?start=2019-01-01&end=2019-01-31')
    }

}

export default new DataService()