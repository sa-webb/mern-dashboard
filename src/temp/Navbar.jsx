import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SortIcon from '@material-ui/icons/Sort';
import ViewHeadline from '@material-ui/icons/ViewHeadline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ListItemLink } from './ListItem';
import SimpleTable from '../data/SimpleTable';
import NestedGrid from '../data/NestedGrid';
import CustomizedTables from '../data/CustomizedTables';

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
    fontSize: 12
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

const routes = [  
  {
    path: "/dashboard/home",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home/>
  },
  {
      path: "/dashboard/products",
      exact: true,
      main: () => <SimpleTable />
  },
  {
      path: "/dashboard/grid",
      exact: true,
      main: () => <NestedGrid/>
  },
  {
      path: "/dashboard/custom",
      exact: true,
      main: () => <CustomizedTables />
  }
]

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
                Reckon
              </Link>
              <nav>
                <Link
                  variant="button"
                  color="inherit"
                  href="/pricing"
                  className={classes.link}
                >
                  NavOne
                </Link>
                <Link
                  variant="button"
                  color="inherit"
                  href="/dashboard2"
                  className={classes.link}
                >
                  NavTwo
                </Link>
                <Link
                  variant="button"
                  color="inherit"
                  href="#"
                  className={classes.link}
                >
                  NavThree
                </Link>
              </nav>
              <Button href="/login" color="inherit" variant="outlined" className={classes.link}>
                    Logout
                </Button>
            </Toolbar>
          </AppBar>

          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            <List component="nav">
              <ListItemLink
                to="/dashboard/home"
                primary="Home"
                icon={<HomeIcon />}
              />
              <ListItemLink
                to="/dashboard/products"
                primary="Products"
                icon={<AssessmentIcon />}
              />
              <ListItemLink
                to="/dashboard/grid"
                primary="Grid"
                icon={<ViewHeadline />}
              />
              <ListItemLink
                to="/dashboard/custom"
                primary="Custom"
                icon={<SortIcon />}
              />

              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </main>
        </div>
      </Router>
    </React.Fragment>
  );
}

function Home() {
  return (
    <h1>Home Component</h1>
  )
}