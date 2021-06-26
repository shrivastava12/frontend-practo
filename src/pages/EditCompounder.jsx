import { useParams } from "react-router";
import React from 'react';
import {Grid,makeStyles,Card,CardActionArea,TextField,CardMedia,CardContent,FormControlLabel,Checkbox,Box} from '@material-ui/core'



const useStyles = makeStyles({
    root:{
        maxWidth:345,
        
    },
    media:{
        height:200
    }
}) 

const EditCompounder = () => {

    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('user'))

    let {id} = useParams();

    return(
        <Grid container spacing={3}>
            <Grid item  xs={12} sm={4} > 
                <Card  className={classes.root}>
                    <CardActionArea>
                        <CardMedia image="https://picsum.photos/200" className={classes.media} />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={8}>

            <Card variant="outlined">
                <CardContent>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size="small"
                    id="name"
                    label="Full Name"
                    name="email"
                    autoComplete="name"
                    autoFocus
                    fullWidth="false"
                 />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size="small"
                    id="phone"
                    label="Phone no"
                    name="number"
                    autoComplete="text"
                    autoFocus
                    fullWidth="false"
                 />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size="small"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    fullWidth="false"
                 />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size="small"
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                    fullWidth="false"
                 />
                 
                 <FormControlLabel
                    control={
                        <Checkbox
                            checked={true}
                            onChange={() => {}}
                            name="checkedB"
                            color="primary"
                         />
                         }
                     label="IsActive"
                />

                <Box>
                    <h2>Permissions</h2>
                    {
                        user.permissions.map(item => (
                            <FormControlLabel key={item => item}
                            control={
                                <Checkbox
                                    checked={true}
                                    onChange={() => {}}
                                    name="checkedB"
                                    color="primary"
                                 />
                                 }
                             label={item}
                        />
                        ))
                    }
                   
                </Box>
                </CardContent>
            </Card>

            </Grid>
        </Grid>
        
    )
};

export default EditCompounder;