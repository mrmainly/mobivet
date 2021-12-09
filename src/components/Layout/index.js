import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Notification } from '../../components'

import MobileHeader from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <MobileHeader />
            <Box style={{ minHeight: 700, marginTop: 20 }}>
                {children}
            </Box>
            <Footer />
        </div>
    )
}

export default Layout