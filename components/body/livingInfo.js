import React, { Component } from 'react'
import WeeklyMarketSale from '../body/parts/weeklyMarketSale'
import WeeklyMarketSaleList from '../body/parts/weeklyMarketSaleList'
import Fortune from '../body/parts/fortune'
import Citizenship from '../body/parts/citizenship'

class LivingInfo extends Component {

    render () {

        const { location, match } = this.props;

        //let bodyType = {match}.match.url === '/' ? 'home' : {match}.match.params.p1
        let bodyType = ( match.params.p2 === undefined || match.params.p2 === 'market' ) ? 'market' : match.params.p2

        return (
            <>
                { bodyType === 'market' && <><WeeklyMarketSale /><WeeklyMarketSaleList /></> }
                { bodyType === 'fortune' && <Fortune />  }
                { bodyType === 'citizenship' && <Citizenship />  }

            </>
        )
    }
}

export default LivingInfo
