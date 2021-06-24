import React from 'react';
import {makeStyles,Card,Grid,Typography,CardContent,Avatar} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import PieChart from '../../components/PieChart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      },
      media: {
        height: 140,
      },
      avatar: {
          margin: theme.spacing(2),
            height:60,
            width:60,
          backgroundColor: theme.palette.secondary.main,
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
          },
          title: {
            margin: theme.spacing(4, 0, 2),
          },

}))

const OfflineRevenu  = () => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
    return(
    
        <div>

            <Card elevation={1} className={classes.root}>
                <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">OfflineRevenu</Typography>
                    <hr></hr>
                    <Grid container >
                        <Grid xs={12} sm={3} style={{'display':'flex','justifyContent':'center','marginBottom':'5px'}}>

                                <Card style={{'width':'90%','backgroundColor':'#FF6666','color':'#fff'}} elevation={1}>
                                    <CardContent style={{'display':'flex'}}>
                                       
                                       <div>
                                       <Avatar className={classes.avatar}>
                                            <PersonAddIcon fontSize="large" />
                                     </Avatar>
                                       </div>
                                        <div>
                                        <p style={{'marginBottom':0,'padding':0}}>Total patient</p>
                                        <Typography component="h1" variant="h3">
                                              112
                                         </Typography>
                                        </div>
                                      
                                    </CardContent>
                                </Card>
                            
                        </Grid>
                        <Grid xs={12} sm={3} style={{'display':'flex','justifyContent':'center','marginBottom':'5px'}}>

                                <Card style={{'width':'90%','backgroundColor':'#FF6666','color':'#fff'}} elevation={1}>
                                    <CardContent style={{'display':'flex'}}>
                                       
                                       <div>
                                       <Avatar className={classes.avatar}>
                                            <PersonAddIcon fontSize="large" />
                                     </Avatar>
                                       </div>
                                        <div>
                                        <p style={{'marginBottom':0,'padding':0}}>Total patient</p>
                                        <Typography component="h1" variant="h3">
                                              112
                                         </Typography>
                                        </div>
                                      
                                    </CardContent>
                                </Card>
                            
                        </Grid>
                        <Grid xs={12} sm={3} style={{'display':'flex','justifyContent':'center','marginBottom':'5px'}}>

                                <Card style={{'width':'90%','backgroundColor':'#E07C24','color':'#fff'}} elevation={1}>
                                    <CardContent style={{'display':'flex'}}>
                                    
                                    <div>
                                    <Avatar className={classes.avatar}>
                                            <PersonAddIcon fontSize="large" />
                                    </Avatar>
                                    </div>
                                        <div>
                                        <p style={{'marginBottom':0,'padding':0}}>Today Revenue</p>
                                        <Typography component="h1" variant="h3">
                                            112
                                        </Typography>
                                        </div>
                                    
                                    </CardContent>
                                </Card>

                        </Grid>
                        <Grid xs={12} sm={3} style={{'display':'flex','justifyContent':'center','marginBottom':'5px'}}>

                            <Card style={{'width':'90%','backgroundColor':'#FF6263','color':'#fff'}} elevation={1}>
                                <CardContent style={{'display':'flex'}}>
                                
                                <div>
                                <Avatar className={classes.avatar}>
                                        <MonetizationOnIcon fontSize="large" />
                                </Avatar>
                                </div>
                                    <div>
                                    <p style={{'marginBottom':0,'padding':0}}>Net Revenue</p>
                                    <Typography component="h1" variant="h3">
                                        112
                                    </Typography>
                                    </div>
                                
                                </CardContent>
                            </Card>

                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
           
{/* <PieChart/> */}

    {/* <Chart/> */}

    <Grid container>
                <Grid style={{'marginTop':10,'padding':0}}  item xs={12} sm={6}>
                    <Card elevation={1}>
                        <CardContent>
                        <div className={classes.demo}>
            <List dense={dense}>
              
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <InsertDriveFileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <CloudDownloadIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <InsertDriveFileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <CloudDownloadIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <InsertDriveFileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <CloudDownloadIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              
            </List>
          </div>
                        </CardContent>
                    </Card>
                    
                </Grid>
                <Grid style={{'margin':0,'padding':0}} item xs={12} sm={6}>

                <PieChart style={{'margin':0,'padding':0}}/>
              
                </Grid>
     </Grid>




        </div>
    )
};

export default OfflineRevenu;