import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, MenuItem, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    menuTitle: {
        backgroundColor: 'rgba(42, 147, 195, 1)',
        color: '#fff',
        padding: '5px 10px 5px 20px',
        borderRadius: 5,
    },
    menuItemBox: {
        marginBottom: 20,
        marginTop: 20
    },
    menuItemText: {
        marginTop: 10
    }
}))

const SideBar = () => {
    const classes = useStyles()
    const sideBarData = [
        {
            title: 'Сортировка',
            items: [
                {
                    label: 'Сначала дешевые',
                    change: ''
                },
                {
                    label: 'Сначала дорогие',
                    change: ''
                }
            ]
        },
        {
            title: 'Животные:',
            items: [
                {
                    label: 'Все',
                    change: ''
                },
                {
                    label: 'Кошки',
                    change: ''
                },
                {
                    label: 'Собаки',
                    change: ''
                },
                {
                    label: 'Птицы',
                    change: ''
                },
                {
                    label: 'Грызуны',
                    change: ''
                },

            ]
        }
    ]
    return (
        <Box>
            {sideBarData.map((item, index) => (
                <Box key={index}>
                    <Box className={classes.menuTitle}>
                        <Typography variant="body1">{item.title}</Typography>
                    </Box>
                    <Box className={classes.menuItemBox}>
                        {item.items.map((elem, index) => (
                            <MenuItem className={classes.menuItemText} key={index}>
                                <Typography variant="body1" >{elem.label}</Typography>
                            </MenuItem>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default SideBar