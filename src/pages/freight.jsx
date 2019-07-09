import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SortIcon from "@material-ui/icons/Sort";
import ViewHeadline from "@material-ui/icons/ViewHeadline";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ListItemLink } from "../components/helpers/ListItem";
import SimpleTable from "../data/SimpleTable";
import NestedGrid from "../data/NestedGrid";
import CustomizedTables from "../data/CustomizedTables";
import { NavBar } from "../components/NavBar";
import Create from "@material-ui/icons/Create";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontWeight: "bold",
    fontSize: 12
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  toolbarTitle: {
    flexGrow: 1,
    fontWeight: "bold"
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbarr: {
    flexWrap: "wrap"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

const routes = [
  {
    path: "/freight/home",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <SimpleTable />
  },
  {
    path: "/freight/products",
    exact: true,
    main: () => <SimpleTable />
  },
  {
    path: "/freight/grid",
    exact: true,
    main: () => <NestedGrid />
  },
  {
    path: "/frieght/custom",
    exact: true,
    main: () => <CustomizedTables />
  }
];

export function Freight() {
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
                to="/freight/add"
                primary="Create Invoice"
                icon={<Create />}
              />
              <ListItemLink
                to="/freight/home"
                primary="Home"
                icon={<HomeIcon />}
              />
              <ListItemLink
                to="/freight/products"
                primary="Products"
                icon={<AssessmentIcon />}
              />
              <ListItemLink
                to="/freight/grid"
                primary="Grid"
                icon={<ViewHeadline />}
              />
              <ListItemLink
                to="/freight/custom"
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
  );
}
