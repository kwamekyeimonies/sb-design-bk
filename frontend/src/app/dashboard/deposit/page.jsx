import React from 'react'
import ResponsiveAppBar from '../side-nav'
import SearchCustomer from './searchCustomer'
import DepositForm from './depositForm'

const Deposit = () => {

    

    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <h1>
                    Lets deposit money
                </h1>
                <SearchCustomer />
                <DepositForm />
            </div>
        </div>
    )
}

export default Deposit