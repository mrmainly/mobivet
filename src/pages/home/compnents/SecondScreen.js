import React from 'react'

import { Box, Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    wrapperContainer: {
        backgroundColor: `#2A93C3`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover',
        marginTop: 100,
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 500,
        color: 'white',
    },
    imgBlock: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20
    },
    LeftLine: {
        backgroundColor: '#fff',
        width: 40,
        height: 400,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        borderTopRightRadius: 10,
        borderEndEndRadius: 10,
    },
    RightLine: {
        backgroundColor: '#fff',
        width: 40,
        height: 400,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        borderTopLeftRadius: 10,
        borderEndStartRadius: 10,
    }
}))

const SecondScreen = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapperContainer}>
            <Box className={classes.LeftLine}></Box>
            <Container className={classes.container}>
                <Grid container className={classes.content}>
                    <Grid item className={classes.infoBlock} lg={6} xs={12} xl={6} md={6} sm={12} >
                        <Typography variant="h4" style={{ marginBottom: 10 }}>О проекте</Typography>
                        <Typography variant="body1">О проекте Мы хотим сделать портал для удобства содержания вашего питомца</Typography>
                    </Grid>
                    <Grid item className={classes.imgBlock} lg={6} xs={12} xl={6} md={6} sm={12}>
                        <img src="/img/image2.png" style={{ width: '70%' }} />
                    </Grid>
                </Grid>
            </Container>
            <Box className={classes.RightLine}></Box>
        </Box>
    )
}

export default SecondScreen