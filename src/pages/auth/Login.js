import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Container } from '@material-ui/core'
import { useHistory, Link } from 'react-router-dom'
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

export default function Login() {
    const classes = useStyles();
    const router = useHistory()
    const dispatch = useContext(DispatchContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
    })
    const onSubmit = (data) => {
        // API.getToken({ ...data }, dispatch, router)
    }

    return (
        <Layout>
            <Container>
                <div style={{ paddingTop: 60 }}>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Авторизация
                        </Typography>
                        <Form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Input {...register('phone')} id="phone" type="tel" label="Телефон" error={!!errors.phone} helperText={errors?.phone?.message} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input {...register('password')} id="password" type="password" label="Пароль" error={!!errors.password} helperText={errors?.password?.message} />
                                </Grid>
                            </Grid>
                            <Box style={{ marginTop: 10 }}>
                                <Button>Войти</Button>
                            </Box>
                        </Form>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Box style={{ marginTop: 10 }}>
                                <Link to="/auth/forgot-password" >
                                    Забыли пароль?
                                </Link>
                            </Box>
                            <Box style={{ marginTop: 8 }}>
                                <Link to="/auth/register" >
                                    Зарегистрироваться
                                </Link>
                            </Box>
                        </Box>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}