import React from 'react'
import ResponsiveAppBar from '../side-nav'
import SearchCustomer from '../deposit/searchCustomer'
import LoanCustomer from './loan'


const Deposit = () => {

    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <h1>
                    Lets deposit money
                </h1>
                <SearchCustomer />
                <LoanCustomer />
            </div>
        </div>
    )
}

export default Deposit