import React from 'react'
import { Container, Grid } from '@material-ui/core'

import Layout from '../../components/Layout/Layout'
import MainContentCards from '../../constructor/MainContentCards'
import SideBar from '../../components/Layout/SideBar'

const ServicePage = () => {
    return (
        <Layout>
            <Container>
                <Grid container >
                    <Grid item lg={3} sm={12} md={12} xl={3} xs={12}>
                        <SideBar />
                    </Grid>
                    <Grid item lg={9} sm={12} md={12} xl={9} xs={12} style={{ marginTop: '-20px' }}>
                        <MainContentCards />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ServicePage