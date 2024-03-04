import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles'
import Hero from '../../assets/hero.jpg'


const Navbar = () => {
    const classes = useStyles();
  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={Hero} alt="COMIC-MARKET" height="25px" className={classes.image} />
                    COMIC-MARKET
                </Typography>
                <div className={classes.grow}></div>
                <div className={classes.button}>
                    <IconButton aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar