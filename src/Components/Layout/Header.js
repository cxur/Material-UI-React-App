import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';

const header = () => {
    return (
        <AppBar position="static">
        <Toolbar>
        <Typography variant="h4" color="inherit">
        Excercise Database
      </Typography>
        </Toolbar>
      </AppBar>
    )
    
}

export default header;