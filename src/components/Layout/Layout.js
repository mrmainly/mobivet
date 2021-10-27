import React from 'react'
import { Box, Container } from '@material-ui/core'
import Notification from '../../components/Notification'

import MobileHeader from './MobileHeader'
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