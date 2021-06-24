import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Button,
  Divider,
  AppBar,
  CssBaseline,
  ListItemIcon,
  Grid,
  Paper,
  Typography,
  ListItemText,
  Toolbar,
  List,
  Hidden,
  IconButton,
  Drawer,
  ListItem,
  Collapse,
} from '@material-ui/core';

import {
  Mail as MailIcon,
  Menu as MenuIcon,
  Inbox as InboxIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };

    return (
      <React.Fragment>
        <ListItem button onClick={handleClick}>
          <ListItemIcon><InboxIcon></InboxIcon></ListItemIcon>
          <ListItemText primary={item.title} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              <ListItem button key={key} style={{paddingLeft: '25px'}}>
                <ListItemIcon>{key % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={child} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} >
      </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts', { title: "hello", items: ['hello one'] }].map((text, index) => (
          <>
            {
              typeof text === 'string' ?
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
                :
                <MultiLevel item={text} />
            }
          </>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"df 
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap style={{ flexGrow: "1" }}>
            Admin Panel
          </Typography>

          <Button color="inherit">login</Button>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
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

        {/* <Grid container spacing={2} justify="center" >
          {
            [0, 1, 2, 3, 4, 5, 6, 7].map((i, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Paper elevation={7} style={{ height: 75, width: "100%" }} />
                </Grid >
              )
            })
          }
        </Grid> */}

        {/* <Typography paragraph>
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

        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur facilis mollitia aperiam, eligendi earum reprehenderit quidem architecto aliquid tempore quaerat, soluta possimus modi nemo? Dignissimos tempora, eaque veniam cum repudiandae id placeat accusantium nobis deleniti soluta odit dolor veritatis reiciendis et obcaecati neque qui possimus quos asperiores eos hic molestiae dolore amet quidem? Magni voluptate, delectus aspernatur illum deserunt ad explicabo enim unde velit ipsa suscipit inventore dolor dicta, temporibus quae labore voluptates quia deleniti id non quidem sequi sapiente eius dolorem? Enim sapiente omnis doloribus accusamus beatae temporibus aliquid, numquam ducimus eveniet neque, perspiciatis corrupti in. Quibusdam veritatis non soluta asperiores tempore! Accusamus alias illum eveniet dignissimos molestias explicabo odit obcaecati eligendi quas!
        </Typography>

        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur facilis quibusdam placeat mollitia aperiam, eligendi earum reprehenderit quidem architecto aliquid tempore quaerat, soluta possimus modi nemo? Dignissimos tempora, eaque veniam cum repudiandae id placeat accusantium nobis deleniti soluta odit dolor veritatis reiciendis et obcaecati neque qui possimus quos asperiores eos hic molestiae dolore amet quidem? Magni voluptate, delectus aspernatur illum deserunt ad explicabo enim unde velit ipsa suscipit inventore dolor dicta, temporibus quae labore voluptates quia deleniti id non quidem sequi sapiente eius dolorem? Enim sapiente omnis doloribus accusamus beatae temporibus aliquid, numquam ducimus eveniet neque, perspiciatis corrupti in. Quibusdam veritatis non soluta asperiores tempore! Accusamus alias illum eveniet dignissimos molestias explicabo odit obcaecati eligendi quas!
        </Typography> */}


      </main>
    </div>
  );
}

export default Sidebar;