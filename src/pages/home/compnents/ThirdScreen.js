import React from 'react'

import { Box, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 150,
        [theme.breakpoints.down('md')]: {
            marginTop: 50
        },
    },
    infoBlockItem: {
        color: 'rgba(74, 109, 156, 1)',
        marginTop: 10,
    },
    line: {
        height: 2,
        width: 120,
        background: 'rgba(58, 174, 227, 1)',
        marginTop: 50
    },
    infoBlock: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        marginBottom: 10,
        fontWeight: 'bold'
    },
    img: {
        width: 350,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    lineShow: {
        [theme.breakpoints.down('md')]: {
            height: 2,
            width: 120,
            background: 'rgba(58, 174, 227, 1)',
            marginTop: 50,
        },
    },
}))

const ThirdScreen = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid className={classes.infoBlock} item xl={4} sm={12} xs={12} md={12} lg={4}>
                    <Box className={classes.infoBlockItem}>
                        <Typography variant="h5" className={classes.title}>Дневник питомцев</Typography>
                        <Typography variant="body1">фждылв зфдлывж длфы жыв ждлфыжы вждлфыж двлфждылв ждфылв ждфл ывждфлыж вдлффдыб вд жфыбв</Typography>
                        <Box className={classes.line}></Box>
                    </Box>
                    <Box className={classes.infoBlockItem}>
                        <Typography variant="h5" className={classes.title}>Умные советы</Typography>
                        <Typography variant="body1">фждылв зфдлывж длфы жыв ждлфыжы вждлфыж двлфждылв ждфылв ждфл ывждфлыж вдлффдыб вд жфыбв</Typography>
                        <Box className={classes.line}></Box>
                    </Box>
                    <Box className={classes.infoBlockItem}>
                        <Typography variant="h5" className={classes.title}>Онлайн калькулятор</Typography>
                        <Typography variant="body1">фждылв зфдлывж длфы жыв ждлфыжы вждлфыж двлфждылв ждфылв ждфл ывждфлыж вдлффдыб вд жфыбв</Typography>
                        <Box className={classes.lineShow}></Box>
                    </Box>
                </Grid>
                <Grid className={classes.infoBlock} item xl={4} sm={12} xs={12} md={4} lg={4}>
                    <img src="/img/image3.png" className={classes.img} />
                </Grid>
                <Grid className={classes.infoBlock} item xl={4} sm={12} xs={12} md={12} lg={4}>
                    <Box className={classes.infoBlockItem}>
                        <Typography variant="h5" className={classes.title}>Консультации</Typography>
                        <Typography variant="body1">фждылв зфдлывж длфы жыв ждлфыжы вждлфыж двлфждылв ждфылв ждфл ывждфлыж вдлффдыб вд жфыбв</Typography>
                        <Box className={classes.line}></Box>
                    </Box>
                    <Box className={classes.infoBlockItem}>
                        <Typography variant="h5" className={classes.title}>Телеветеринария</Typography>
                        <Typography variant="body1">фждылв зфдлывж длфы жыв ждлфыжы вждлфыж двлфждылв ждфылв ждфл ывждфлыж вдлффдыб вд жфыбв</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ThirdScreen