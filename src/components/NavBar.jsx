import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // backgroundColor: 'black'
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 15
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  toolbarTitle: {
    flexGrow: 1,
    fontWeight: 'bold',

  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbarr: {
    flexWrap: 'wrap',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Router>
        <div className={classes.root}>
          <CssBaseline />

          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbarr}>
              <Link
                variant="h6"
                color="inherit"
                href="/"
                noWrap
                className={classes.toolbarTitle}
              >
                Dashboard
              </Link>
              <nav>
                <Link
                  variant="button"
                  color="inherit"
                  href="/inventory"
                  className={classes.link}
                >
                  Inventory
                </Link>
                <Link
                  variant="button"
                  color="inherit"
                  href="/freight"
                  className={classes.link}
                >
                  Freight
                </Link>
                <Link
                  variant="button"
                  color="inherit"
                  href="/records"
                  className={classes.link}
                >
                  Records
                </Link>
              </nav>
            </Toolbar>
          </AppBar>
        </div>
      </Router>
    </React.Fragment>
  );
}