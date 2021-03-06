import React from 'react'
import { Box, Container, TextField, TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Button } from '../../../components'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
        flexDirection: 'column'
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
    },
    TextFieldStyle: {
        width: '45%',
        marginBottom: 20,
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

const ContactsPage = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>

        </Container>
    )
}

export default ContactsPage