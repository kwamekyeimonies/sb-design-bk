import React from 'react'
import ResponsiveAppBar from '../side-nav'
import Withdraw from './withdraw'
import SearchCustomer from '../deposit/searchCustomer'

const Withdrawal = () => {

    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <h1>
                    Lets Withdrawal money
                </h1>
                <SearchCustomer />
                <Withdraw />
            </div>
        </div>
    )
}

export default Withdrawal