import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, Button, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginTop: 20,
        borderRadius: 15,
        boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.15)',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            width: 290,
        },
    },
    cover: {
        height: 200,
        borderRadius: 15,
        width: 190,
        objectFit: 'cover',
        [theme.breakpoints.down('xs')]: {
            borderRadius: '0px',
            width: 210,
        },
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            padding: 20
        },
    },
    titleBox: {
        color: 'rgba(66, 146, 188, 1)',
        wordWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    priceBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
    actionBlock: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    navbar: {
        background: '#62BCE5',
        minHeight: 40,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 40,

    }
}));

export default function CardDiary(props) {
    const classes = useStyles();
    const history = useHistory()
    return (
        <Card className={classes.root}>
            <Box className={classes.navbar}>
                <Typography variant="h6">asdfS</Typography>
            </Box>
            <CardActionArea>
                <Grid container>
                    <Grid item lg={4} sm={4} md={4} xl={3} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img
                            className={classes.cover}
                            src={props.photo}
                        />
                    </Grid>
                    <Grid item lg={8} sm={8} md={8} xl={8} xs={12} className={classes.mainContent}>
                        <Box className={classes.priceBlock}>
                            <Typography variant="h6">Вид: <span>{props.view}</span></Typography>
                            <Typography style={{ marginTop: 10 }} variant="h6">Порода: <span >{props.breed} </span></Typography>
                            <Typography style={{ marginTop: 10 }} variant="h6">Возраст: <span >{props.age} </span></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
}