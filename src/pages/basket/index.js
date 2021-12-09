import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography, MenuItem, Container } from '@material-ui/core'

import { CardBasketJson } from '../../Json/CardBasketJson'
import { Layout, CardBasket } from '../../components'


const useStyles = makeStyles(() => ({
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}))

const Basket = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Container>
                <Grid container className={classes.content}>
                    <Grid item lg={9} md={9} sm={12} xs={12} xl={9}>
                        <Box className={classes.titleBox}>
                            <Typography variant="h6">Корзина</Typography>
                            <MenuItem>Очистить корзину</MenuItem>
                        </Box>
                        <Box>
                            {CardBasketJson.map((item, index) => (
                                <CardBasket key={index} {...item} />
                            ))}
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12} xl={3}>
                        aads
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default Basket