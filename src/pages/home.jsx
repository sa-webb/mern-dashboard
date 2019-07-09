import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListIcon from "@material-ui/icons/List";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import clsx from "clsx";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CreateInvoice } from "../components/inventory/Create";
import InvoiceList from '../components/inventory/List';
import { ListItemLink } from "../components/ListItem";
import SimpleTable from '../data/SimpleTable';
import Planets from '../components/hooks/Fetch';

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

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Planets />
  },
  {
    path: "/create",
    exact: true,
    main: () => <CreateInvoice />
  },
  {
    path: "/invoices",
    exact: true,
    main: () => <SimpleTable />
  },
  {
    path: "/oldinvoices",
    exact: true,
    main: () => <InvoiceList />
  }
];

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
                Johnson Sawmill
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
                  href="#"
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
                to="/create"
                primary="Create Invoice"
                icon={<NoteAddIcon fontSize="large" />}
              />
              <ListItemLink
                to="/invoices"
                primary="Invoices"
                icon={<ListIcon fontSize="large" />}
              />
              <ListItemLink
                to="/oldinvoices"
                primary="Old Invoices"
                icon={<ListIcon fontSize="large" />}
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
