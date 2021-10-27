// import react and modules
import * as React from 'react'
import Layout from '../components/layout'
import { Helmet } from "react-helmet"

// define page component
const IndexPage = () => {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
            <Layout pageTitle="Home Page">
                <p>This is my portfolio</p>
            </Layout>
        </div>
    )
}

// Export page component
export default IndexPage