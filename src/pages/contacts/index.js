import React from 'react'
import { Box } from '@material-ui/core'

import { Layout } from '../../components'
import FeedbackScreen from './components/FeedbackScreen'
import FeedbackForm from './components/FeedbackForm'

const contactPage = () => {
    return (
        <Layout>
            <FeedbackScreen />
        </Layout>
    )
}

export default contactPage