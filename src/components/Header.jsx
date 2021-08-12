import React from 'react';
import { AppBar, Toolbar, makeStyles, Box, InputBase } from '@material-ui/core';
import logo from "../images/logo.png";
import SearchIcon from '@material-ui/icons/Search';

// Material UI style
const useStyle = makeStyles( {
    header: {
        backgroundColor: "black",
        padding: 6
    },
    image: {
        width:100
    },
    search: {
        backgroundColor: "rgba(250, 250, 250, 0.4)",
        marginLeft: 100,
        borderRadius:4,
        position:"relative",
    },
    inputBox: {
        color:"inherit",
        margin: "0 40px",
        paddingLeft:8,
        paddingRight:8,
    },
    searchIcon: {
        position:"absolute",
        marginLeft:5,
        top:3,
    }
})
const Header = ({valueInput}) => {
    // calling function
    const classes =useStyle()
    return(
        <>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                    <img className={classes.image} src={logo} alt="logo" />
                    <Box className={classes.search}>
                        <Box className={classes.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            placeholder="Seach by name"
                            autoFocus
                            classes={{root:classes.inputBox}}
                            onChange={(e) =>valueInput(e.target.value) }
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Header;