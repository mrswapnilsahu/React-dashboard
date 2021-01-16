import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#90CAF9', color: '#425D72'}}>
        <Toolbar variant="dense">
        <img src={logo} className="App-logo" style={{height:'8vh'}} alt="logo" />
          <Typography variant="h6" color="inherit">
            React Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
