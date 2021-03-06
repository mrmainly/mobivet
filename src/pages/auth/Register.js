import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { DispatchContext } from '../../store/Index';
import { Button, Layout, Form, Input } from '../../components';

const useStyles = makeStyles((theme) => ({
    form: {
        width: 400,
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        },
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '60%',
        margin: '0 auto',
        paddingTop: 30,
        paddingBottom: 30,
        filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15))",
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        borderRadius: 8,
    }

}));

export default function Register() {
    const classes = useStyles()
    const dispatch = useContext(DispatchContext)
    const router = useHistory()
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    const onSubmit = ({ password, verPassword, phone }) => {
        // if (verPassword == password) {
        //     if (password.length >= 8) {
        //         API.register({ phone, password }, dispatch, router)
        //     } else {
        //         dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'пароль должен состоять минимум из 8 символов' } })
        //     }
        // } else {
        //     dispatch({ type: 'notification', payload: { text: 'пароли не совподают', status: 'error', active: true } })
        // }
    }
    return (
        <Layout>
            <Container>
                <div style={{ paddingTop: 60 }}>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Регистрация
                        </Typography>
                        <Form className={classes.form} onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Input {...register('phone')} id="phone" type="number" label="Телефон" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input {...register('password')} id="password" type="password" label="Пароль" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input {...register('verPassword')} id="verPassword" type="password" label="Проверка пароля" />
                                </Grid>
                            </Grid>
                            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 20 }}>
                                <Button >Зарегестрироваться</Button>
                            </Box>
                        </Form>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}