import React, { useState, useEffect, useContext } from "react";
import {
    AppBar,
    Toolbar,
    makeStyles,
    IconButton,
    Drawer,
    MenuItem,
    Box,
    Container,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import themeMain from '../../theme'
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    header: {
        "@media (max-width: 1279px)": {
            paddingLeft: 0,
            background: themeMain.palette.background.layoutBackground,
            display: 'block',
        },
        display: 'none'
    },
    drawerContainer: {
        width: 250
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    full_screen: {
        background: themeMain.palette.background.layoutBackground,
        paddingTop: 5,
        paddingBottom: 5,
        minHeight: 30
    },
    link_Style: {
        color: 'white',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            fontSize: 18,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 4,
            width: '100%',
            color: 'black',
            background: 'white',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
            width: 200,
        },
    },
    img: {
        width: 102,
    },
    login: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            fontSize: 18,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 4,
            width: '100%',
            color: 'black',
            background: 'white',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
            width: 200,
            height: 40
        },
    }
}));

export default function MobileHeader() {
    const classes = useStyles();
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

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1279
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);
    const displayDesktop = () => {
        return (
            <div className={classes.full_screen}>
                <Container className={classes.container}>
                    <Box className={classes.headerBlock}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={'/img/Vector.png'} style={{ marginRight: 10 }} />
                            <Box>
                                <Typography style={{ fontSize: 11 }}>Call-центр:</Typography>
                                <Typography>500-900</Typography>
                            </Box>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
                            <img src={'/img/Vector.png'} style={{ marginRight: 10 }} />
                            <Box>
                                <Typography style={{ fontSize: 11 }}>Касса платных услуг:</Typography>
                                <Typography>395306 (взрослая) 395651 (детская)</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.headerBlock}>
                        <MenuItem style={{ display: 'flex', alignItems: 'center', marginRight: 20 }} onClick={() => { router.push('/basket') }}>
                            <img src={'/img/Frame61.png'} style={{ marginRight: 10 }} />
                            <Box>
                                <Typography>Корзина</Typography>
                            </Box>
                        </MenuItem>
                        {loginBlock()}
                    </Box>
                </Container>
            </div>

        );
    };
    const loginBlock = () => {
        return (
            <Box>
                <MenuItem className={classes.login} onClick={() => router.push('/auth/login')}>
                    <img src={'/img/fi_user.png'} style={{ marginRight: 10 }} />
                    <Typography>Войти в аккаунт</Typography>
                </MenuItem>
            </Box>
        )
    }
    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', }}>
                    <IconButton
                        {...{
                            edge: "start",
                            "aria-label": "menu",
                            "aria-haspopup": "true",
                            onClick: handleDrawerOpen,
                        }}
                        style={{ color: 'white', marginRight: 10 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography variant="h6" >MobiVet</Typography>
                    </Box>
                </Box>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={classes.drawerContainer} >{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {loginBlock()}
                {headersData.map(item => (
                    <Link to={item.link}>
                        <MenuItem className={classes.login}>
                            {item.title}
                        </MenuItem>
                    </Link>
                ))}
            </div>
        )
    };
    return (
        <header>
            <AppBar className={classes.header} position="static">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
            <Header />
        </header>
    );
}