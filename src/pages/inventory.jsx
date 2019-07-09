import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import UndoIcon from '@material-ui/icons/Undo';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SortIcon from '@material-ui/icons/Sort';
import ViewHeadline from '@material-ui/icons/ViewHeadline';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ListItemLink } from '../components/helpers/ListItem';
import SimpleTable from '../data/SimpleTable';
import NestedGrid from '../data/NestedGrid';
import CustomizedTables from '../data/CustomizedTables';
import { NavBar } from '../components/NavBar';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import { Create } from '../components/hooks/Create';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
    path: "/inventory/create",
    exact: true,
    main: () => <Create />
  },
  {
    path: "/inventory/home",
    exact: true,
    main: () => <Home/>
  },
  {
      path: "/inventory/products",
      exact: true,
      main: () => <SimpleTable />
  },
  {
      path: "/inventory/grid",
      exact: true,
      main: () => <NestedGrid/>
  },
  {
      path: "/inventory/custom",
      exact: true,
      main: () => <CustomizedTables />
  }
]

export function Inventory() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Router>
            <div className={classes.root}>
        <NavBar />
        
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
                to="/inventory/create"
                primary="Create Invoice"
                icon={<NoteAddIcon/>}
              />  
              <ListItemLink
                to="/inventory/home"
                primary="Edit"
                icon={<UndoIcon />}
              />
              <ListItemLink
                to="/inventory/products"
                primary="Invoices"
                icon={<ListIcon />}
              />
              <ListItemLink
                to="/inventory/grid"
                primary="Grid"
                icon={<ViewHeadline />}
              />
              <ListItemLink
                to="/inventory/custom"
                primary="Custom"
                icon={<SortIcon />}
              />
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
    )
}

const Home = () => 
    <h1>Home</h1>