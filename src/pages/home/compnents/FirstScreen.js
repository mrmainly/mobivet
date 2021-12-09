import React from 'react'

import { Box, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Button } from '../../../components'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    infoBlock: {
        display: 'flex',
        flexDirection: 'column',
        width: 380,
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        },
    },
    text: {
        color: 'rgba(74, 109, 156, 1)'
    },
    img: {
        width: '100%'
    }
}))

const FirstScreen = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Box className={classes.imgBlock}>
                <img src="/img/image1.png" className={classes.img} />
            </Box>
            <Box className={classes.infoBlock}>
                <Typography variant="h4" className={classes.text}>MOBIVET</Typography>
                <Typography variant="body1" className={classes.text}>Мобивет Здесь вы можете вести дневик, получить совет или консультацию для вашего питомца.</Typography>
                <Button>Дневник питомцев</Button>
                <Button>Калькулятор здоровья</Button>
                <Button>Умные советы</Button>
            </Box>
        </Container>
    )
}

export default FirstScreen