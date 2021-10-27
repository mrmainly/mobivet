import React from 'react'

import { Box, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ButtonCustom from '../../../components/ButtonCustom'

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
                <Typography variant="body1" className={classes.text}>ффы лвофлыв фыовдфлоы вдфы вдлфыо вдлфоыд влфоыдвлофыдлв офдылво фдыловдлф ффы лвофлыв фыовдфлоы вдфы вдлфыо вдлфоыд влфоыдвлофыдлв офдылво фдыловдлф ффы лв</Typography>
                <ButtonCustom>Дневник питомцев</ButtonCustom>
                <ButtonCustom>Калькулятор здоровья</ButtonCustom>
                <ButtonCustom>Умные советы</ButtonCustom>
            </Box>
        </Container>
    )
}

export default FirstScreen