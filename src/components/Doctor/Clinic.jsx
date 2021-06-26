import React from 'react';
import {Grid,TextField,makeStyles,Avatar,Button} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    demo: {
      backgroundColor: theme.palette.background.paper,
      padding:0,
      width:'80%'
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));

const Clinic = () => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    return(
        <div>
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <div style={{'padding':'10px'}}>
                        
                        <div className={classes.demo}>
                            <List dense={dense}>
                                <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item" />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                    <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                   
                                    </IconButton>
                                </ListItemSecondaryAction>
                                </ListItem>

                                <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item" />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                    <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                   
                                    </IconButton>
                                </ListItemSecondaryAction>
                                </ListItem>
                                <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item" />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                    <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                   
                                    </IconButton>
                                </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div>
                   
                        <form className={classes.form}>
                            <Grid container>
                            <Grid item xs={12}>
                                <TextField 
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        size="small"
                                        id="emal"
                                        label="Name"
                                        name="name"
                                        autoComplete="name"
                                        autoFocus
                                        value=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField className={classes.textField}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        size="small"
                                        id="email"
                                        label="GST no"
                                        name="GST No"
                                        autoComplete="no"
                                        autoFocus
                                        value=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField className={classes.textField}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        size="small"
                                        id="efgmail"
                                        label=" Address"
                                        name="GST No"
                                        autoComplete="no"
                                        autoFocus
                                        value=""
                                    />
                                </Grid>
                               
                                <Grid item xs={12}>
                                <Button
                                  
                                    type="submit"
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    >Add New</Button>
                                </Grid>
                                
                            </Grid>
                            
                            
                            
                            </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Clinic;