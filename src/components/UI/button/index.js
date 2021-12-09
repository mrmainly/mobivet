import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    btn: {
        color: '#fff',
        border: 0,
        height: 40,
        padding: '0 20px',
        '&:focus': {
            outline: "none",
        },
        fontSize: 14,
        backgroundColor: 'rgba(58, 174, 227, 1)',
        marginTop: 20
    }
}));

const ButtonCustom = ({ children, ...props }) => {
    const classes = useStyles()
    return (
        <Button type="submit" variant="contained" className={classes.btn} {...props} >
            {children}
        </Button>
    )
}

export default ButtonCustom