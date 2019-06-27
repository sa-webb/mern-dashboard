import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
    fontSize: 12,
    marginRight: 10
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

          {/* <Drawer
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
          </main> */}
          {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main> */}
        </div>
      </Router>
    </React.Fragment>
  );
}