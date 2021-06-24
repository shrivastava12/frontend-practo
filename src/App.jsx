import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Button,
  Divider,
  AppBar,
  CssBaseline,
  ListItemIcon,
  Typography,
  ListItemText,
  Toolbar,
  List,
  Hidden,
  IconButton,
  Drawer,
  ListItem,
  Link,
  Avatar
} from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';
import {
  Mail as MailIcon,
  Menu as MenuIcon,
  Inbox as InboxIcon,
} from '@material-ui/icons';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import NestedRoute from './components/NestedRoute';
import Patient from './pages/Patient';
import AddPatient from './pages/AddPatient';
import Compounder from './pages/Compounder';
import EditCompounder from './pages/EditCompounder';
import OfflineRevenu from './pages/Revenu/OfflineRevenu';
import OnlineRevenu from './pages/Revenu/OnlineRevenu';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PeopleIcon from '@material-ui/icons/People';

const drawerWidth = 240;
const breakUp = 'md'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up(breakUp)]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up(breakUp)]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(breakUp)]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display:'flex',
    justifyContent:'center'
  },

  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <div>
      <Link component={RouterLink} to="/" color="inherit" underline="none" >
        <div id="hello" className={classes.toolbar}>
        <Avatar className={classes.avatar}>
          <LocalHospitalIcon fontSize="large" />
        </Avatar>
        </div>
      </Link>
      <Divider />
      <List>
{/*        
        {['Patient','Compounder',{ title: "Revenue", items: ['offline','online'] }].map((text, index) => (
          <>
            {
              typeof text === 'string' ?
                <Link key={text => text} component={RouterLink} color="inherit" underline="none" to={`/${text}`}>
                  <ListItem button key={text}>
                    <ListItemIcon>{index == 0 ? <AccessibilityIcon/>:''}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
                :
                <NestedRoute item={text} />
            }
          </>
 
))} */}

          <Link component={RouterLink} color="inherit" underline="none" to='/Patient'>
              <ListItem button>
                <ListItemIcon><AccessibilityIcon/></ListItemIcon>
                <ListItemText primary={'patient'} />
              </ListItem>
          </Link>
          <Link component={RouterLink} color="inherit" underline="none" to='/Compounder'>
              <ListItem button>
                <ListItemIcon><PeopleIcon/></ListItemIcon>
                <ListItemText primary='Compounder' />
              </ListItem>
          </Link>
          <NestedRoute item={{  title: "Revenue", items: ['offline','online']}} />

      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <Link component={RouterLink} color="inherit" underline='none' to={`/${text}`}>
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>

              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div >
  );

  return (
    <Provider store={store}>
    <Router>
      <Switch>

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" noWrap style={{ flexGrow: "1" }}>
                Dr. Abhishek Kumar
              </Typography>

              <Link to="/login" color="inherit" component={RouterLink} underline="none" >
                <Button color="inherit">logout</Button>
              </Link>

            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden mdUp implementation="css">
              <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Route exact path='/' component={Home} />
            <Route exact path="/Patient" component={Patient}/>
            <Route exact path="/patient/addpatient" component={AddPatient} />
            <Route exact path="/Compounder" component={Compounder} />
            <Route exact path="/compounder/:id" component={EditCompounder} />
            <Route exact path="/Revenue/offline" component={OfflineRevenu} />
            <Route exact path='/Revenue/online' component={OnlineRevenu} />
            <Route exact path="/Send email" > Email page</Route>
            <Route exact path="/test">dsfsdfsd</Route>
            <Route exact path="/Drafts" > Drafts page</Route>
            <Route exact path="/hello one" > Hello page</Route>
           
              
          </main>
        </div>
      </Switch>
    </Router>
    </Provider>
  );
}

export default ResponsiveDrawer;