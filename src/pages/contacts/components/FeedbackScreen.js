import React from 'react'
import { Box, Container, Typography, TextField, TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ButtonCustom from '../../../components/ButtonCustom'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 50
        },
        filter: 'drop-shadow(1px 2px 20px rgba(0, 0, 0, 0.25))',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        clipPath: 'polygon(0 1%, 100% 6%, 94% 90%, 5% 94%)',
        width: '90%',
        minHeight: 700,
        backgroundColor: '#F8FEFF',
        paddingTop: 60,
        paddingBottom: 30,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            clipPath: 'none',
            borderRadius: 20
        },

    },
    titleBox: {
        textAlign: 'center',
        width: '70%'
    },
    box_inside: {
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '1px 2px 7px rgba(0, 0, 0, 0.25)',
        width: '80%',
        minHeight: 130,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 50,
        padding: 10,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
    textBox: {
        marginLeft: 30,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 0
        },
    },
    imageBox: {
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
        marginTop: 100
    },
    TextFieldStyle: {
        width: '45%',
        marginBottom: 20,
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    textAreaStyles: {
        width: '80%',
        height: 100,
        marginTop: 20,
        marginBottom: 60
    },
}))

const FeedbackScreen = () => {
    const classes = useStyles()
    const array = [
        {
            label: 'Позвоните',
            img: '/image/Group379.png',
            description: '08:00 - 18:00 в течении дня'
        },
        {
            label: 'Напишите нам',
            img: '/image/Group367.png',
            description: 'Мы ответим в течении ~24 часов'
        },

    ]
    return (
        <Box className={classes.wrapperContainer}>
            <Container className={classes.container}>
                <Box className={classes.box}>
                    <Box className={classes.titleBox}>
                        <Typography variant="body1" style={{ color: '#4684E1' }}>Свяжитесь с нами</Typography>
                        <Typography variant="h4">Остались вопросы?</Typography>
                        <Typography variant="body1" style={{ marginTop: 15 }}>ответим на дополнительные вопросы в специальной форме, там же можно написать отзыв об платформе и поделится рекомендациями по улучшению сервиса.</Typography>
                    </Box>
                    <Box className={classes.inputBox}>
                        <TextField
                            size="small"
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.TextFieldStyle}
                            label="Ваше имя"
                        />
                        <TextField
                            size="small"
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.TextFieldStyle}
                            label="Ваша электронная почта"
                        />
                    </Box>
                    <TextareaAutosize className={classes.textAreaStyles} aria-label="maximum height" rowsMin={10} placeholder="Ваше сообщение" />
                    <ButtonCustom>Отправить сообщение</ButtonCustom>
                </Box>
            </Container>
        </Box>
    )
}

export default FeedbackScreen