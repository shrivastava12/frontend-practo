import React from 'react';

import {TextField,Button,makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },

  }));
const PersonalInfo = () => {

    const classes = useStyles();

    return(
        <>
        <div style={{'display':'flex','margin':0,'padding':0,'justifyContent':'flex-end'}}>
        <select name="edit" id="edit">
            <option value="volvo">Read only</option>
            <option value="saab">Edit</option>
            
         </select>
        </div>
        <form className={classes.form}>
          <Grid container>
          <Grid item xs={12}>
              <TextField className={classes.textField}
                    variant="outlined"
                    margin="normal"
                    required
                    size="small"
                    id="emal"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value="Abishek kumar"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField className={classes.textField}
                    variant="outlined"
                    margin="normal"
                    required
                    size="small"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value="abhishek@gmail.com"
                />
              </Grid>
              <Grid item  xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                size="small"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
             />
              </Grid>
              <Grid item xs={12}>
              <Button
                style={{'float':'right'}}
                type="submit"
                size="small"
                variant="contained"
                color="primary"
                className={classes.submit}
                >Save Changes</Button>
              </Grid>
              
          </Grid>
          
        
          
        </form>
        </>

    )
};

export default PersonalInfo;