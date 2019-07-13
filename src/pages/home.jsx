import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListIcon from "@material-ui/icons/List";
import MenuIcon from "@material-ui/icons/Menu";
import ExposureIcon from "@material-ui/icons/Exposure";
import AssessmentIcon from "@material-ui/icons/BarChart";
import EventIcon from "@material-ui/icons/EventNoteOutlined";
import NoteAddIcon from "@material-ui/icons/NoteAddOutlined";
import AddBoxIcon from "@material-ui/icons/AddBoxOutlined";
// eslint-disable-next-line
import LibraryAddIcon from "@material-ui/icons/LibraryAddOutlined";
// eslint-disable-next-line
import LibraryListIcon from "@material-ui/icons/LibraryBooksOutlined";
import clsx from "clsx";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ListItemLink } from "../components/helpers/ListItem";
import { routes } from '../constants/home.routes';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolbarTitle: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  toolbarr: {
    flexWrap: 'wrap'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 15
  },
}));

export function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open
                })}
              >
                <MenuIcon />
              </IconButton>
              <Link variant="h6" color="inherit" href="/" className={classes.toolbarTitle} >
                Reckon
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

          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })
            }}
            open={open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />

            <List component="nav">
              <ListItemLink
                to="/inventory/create"
                primary="Create Invoice"
                icon={<NoteAddIcon fontSize="large" />}
              />
              <ListItemLink
                to="/inventory/invoices"
                primary="Invoices"
                icon={<ListIcon fontSize="large" />}
              />
              <ListItemLink
                to="/inventory/overview"
                primary="Overview"
                icon={<AssessmentIcon fontSize="large" />}
              />
            </List>
            <Divider />
            
            <List>
            
            <ListItemLink
                to="/freight/create"
                primary="Lumber Invoice"
                icon={<AddBoxIcon fontSize="large" />}
              />
              <ListItemLink
                to="/freight/invoices"
                primary="List Invoices"
                icon={<EventIcon fontSize="large" />}
              />
              <ListItemLink
                to="/freight/mileage"
                primary="List Invoices"
                icon={<ExposureIcon fontSize="large" />}
              />
            </List>

            <Divider />

            {/* <ListItemLink
                to="/maintenance/create"
                primary="Add Maintenance"
                icon={<LibraryAddIcon fontSize="large" />}
              />
            <ListItemLink
                to="/maintenance/logs"
                primary="Maintenance Log"
                icon={<LibraryListIcon fontSize="large" />}
              /> */}

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
