import React from 'react'
import ResponsiveAppBar from '../side-nav'
import SearchCustomer from '../deposit/searchCustomer'
import CreateCustAccount from './create-account'

const CreateCustomerAccount = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <h1>
                    Lets deposit money
                </h1>
                <SearchCustomer />
                <CreateCustAccount />
            </div>
        </div>
    )
}

export default CreateCustomerAccount