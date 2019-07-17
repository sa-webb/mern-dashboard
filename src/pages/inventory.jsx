import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import UndoIcon from "@material-ui/icons/Undo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ListItemLink } from "../components/helpers/ListItem";
import { NavBar } from "../components/NavBar";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { routes } from "../constants/inventory.routes";

const drawerWidth = 200;

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
                primary="Create"
                icon={<NoteAddIcon />}
              />
              <ListItemLink
                to="/inventory/invoices"
                primary="View All"
                icon={<UndoIcon />}
              />
            </List>
            <Divider />
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
