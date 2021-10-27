import React, { useContext } from 'react'
import { Box, Container, Typography, TextField, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import themeMain from '../../theme'

const useStyles = makeStyles((theme) => ({
    menuItemStyle: {
        minHeight: 41,
        borderLeft: '2px solid white'
    },
    link_Box: {
        textDecoration: 'none',
        color: 'white'
    },
    down_block: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
    },
    header_down: {
        background: themeMain.palette.background.layoutBackground
    },
    up_block: {
        minHeight: 230,
    },
    line_box: {
        width: 2,
        height: 35,
        backgroundColor: '#fff',
        [theme.breakpoints.down('xs')]: {
            height: 50
        },
    },
    up_block_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center'
        },
    },
    up_block__info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 20
    },
    textStlye: {
        color: 'rgba(46, 51, 98, 1)',
        fontWeight: 'bold'
    },
    title: {
        marginTop: 30,
        marginBottom: 30,
        color: 'rgba(42, 147, 195, 1)',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
            marginTop: 0
        },
        fontSize: 20,
        fontWeight: 'bold'
    },
    TextFieldStyle: {
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 5,
        '&:focus': {
            outline: "none",
        },
        marginRight: 15
    },
    img: {
        width: 350,
        marginBottom: '-147px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
        },
    },
    wrapperContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    headerBlock: {
        display: 'flex',
        color: 'black',
        flexDirection: 'column',
        width: 300,
    },
}))

const Header = () => {
    const router = useHistory()
    const headersData = [
        {
            link: '/',
            title: 'Главная'
        },
        {
            link: '/service-page',
            title: 'Услуги',
        },
        {
            link: '/faq',
            title: 'Дневник питомцев',
        },
        {
            link: '/faq',
            title: 'Вопрос/Ответ',
        },
        {
            link: '/faq',
            title: 'Контакты',
            showLine: true
        }

    ];
    const loginBlock = () => {
        return (
            <Box>

                <MenuItem className={classes.login} onClick={() => router.push('/auth/login')}>
                    <img src={'/img/fi_user.png'} style={{ marginRight: 10 }} />
                    <Typography>Войти в аккаунт</Typography>
                </MenuItem>
                {/* <MenuItem className={classes.login}>
                    <img src={'/img/fi_user.png'} style={{ marginRight: 10 }} />
                    <Link to="/form-profile" style={{ textDecoration: 'none', color: 'white' }}>grummsed.kolesov@gmail.com</Link>
                </MenuItem> */}
            </Box>
        )
    }
    const classes = useStyles()
    return (
        <div className={classes.wrapperContainer}>
            <Box className={classes.up_block}>
                <Container className={classes.up_block_container}>
                    <Box className={classes.up_block__info}>
                        <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <img src={'/img/mobivet21.png'} style={{ width: 420 }} />
                            <Typography variant="body1" className={classes.title}>
                                Портал для владельцев животных в Якутии
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <img src={'/img/27406a921.png'} className={classes.img} />
                    </Box>
                    <Box className={classes.headerBlock}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={'/img/V.png'} style={{ marginRight: 10 }} />
                            <Box>
                                <Typography style={{ fontSize: 11 }}>Call-центр: </Typography>
                                <Typography>500-900</Typography>
                            </Box>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                            <img src={'/img/V.png'} style={{ marginRight: 10 }} />
                            <Box >
                                <Typography style={{ fontSize: 11 }}>Касса платных услуг: </Typography>
                                <Box style={{ display: 'flex' }}>
                                    <Typography variant="body1">395306(взрослая)</Typography>
                                    <Typography variant="body1" style={{ marginLeft: 10 }}>395651(детская)</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box >
            <Box className={classes.header_down}>
                <Container>
                    <Box className={classes.down_block}>
                        <Box style={{ display: 'flex' }}>
                            {headersData.map((item, index) => (
                                <Link to={item.link} key={index} className={classes.link_Box}>
                                    <MenuItem className={classes.menuItemStyle} style={{ borderRight: `${item.showLine ? '2px solid white' : '0px solid white'}` }}>
                                        {item.title}
                                    </MenuItem>
                                </Link>
                            ))}
                        </Box>
                        <Box style={{ display: 'flex' }}>
                            <MenuItem style={{ display: 'flex', alignItems: 'center', marginLeft: 100 }} onClick={() => { router.push('/basket') }}>
                                <img src={'/img/Frame61.png'} style={{ marginRight: 10, marginLeft: '-10px' }} />
                                <Box>
                                    <Typography>Корзина</Typography>
                                </Box>
                            </MenuItem>
                            {loginBlock()}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div >
    )
}

export default Header