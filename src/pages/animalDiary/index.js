import React from 'react'

import Layout from '../../components/Layout/Layout'
import CardDiary from '../../components/CardDiary'
import { CardBasketJson } from '../../Json/CardBasketJson'

import { Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStales = makeStyles((theme) => ({
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}))

const AnimalDiary = () => {
    const classes = useStales()
    return (
        <Layout>
            <Container>
                <Box className={classes.box}>
                    {CardBasketJson.map((item, index) => (
                        <CardDiary key={index} {...item} />
                    ))}
                </Box>
            </Container>
        </Layout>
    )
}

export default AnimalDiary