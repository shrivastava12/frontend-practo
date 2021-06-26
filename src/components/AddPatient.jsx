import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import apiAddress from '../config/apiAddress';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import EditEvent from './Event/EditEvent';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: '50%',
    left: '50%',
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    height:500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginTop:30,
  },
  div:{
      padding:0,
      backgroundColor:'red',
      borderRadius:25,
  },
  avatar: {
    margin: theme.spacing(2),
     
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Patient =  ({slot}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [address,setAddress] = useState('');
  const [phone,setPhone] = useState('');
  const [reason,setReason] = useState('');
  const [message,setMessage] = useState('');
  const [isEditEvent,setIsEditEvent] = useState(false);
 


  const onhandleSubmit = (e) => {
        e.preventDefault();
        const name = firstName + " " + lastName;
        const token =  localStorage.getItem('token');
        try{
            const options = {
              headers:{
                'Content-Type':'application/json',
                'authorizationtoken':`Bearer ${token}`
              }
            };
            Axios.post(`${apiAddress}/patients`,options,{
              name:name,
              address:address,
              phone:phone,
              reason:reason,
            }).then((res) => {
              if(res.status ==  200){
                setMessage('patient added')
              }
            }).catch((err) => {
              setMessage('errr')
            })
        }catch(e){
            console.log(e);
            setMessage('errrr')
        }
        
  }
 
  const  onClickEdit = () => {
    setIsEditEvent(true)
  }
 
  const onClickBack = () => {
    setIsEditEvent(false)
  }

  return (
    <div style={modalStyle} className={classes.paper}>
            
      
        <CssBaseline/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
       <div><Typography component="h2" variant="h5">
         {isEditEvent ? 'Edit Event' :'Add Patient' } 
        </Typography></div> 
        <div>
                  <Button onClick={onClickEdit}>
                  <EditIcon fontSize="medium" />     
                   </Button>
          
                   <Button>
                   <DeleteOutlineIcon fontSize="medium" />
               
               </Button>
        </div>
  </div>
      {isEditEvent ? (
        <EditEvent onClickBack={onClickBack}/>
      ) : (

<>      
        <Box style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'10px'}}>
            <div style={{'backgroundColor':'#E07C24','color':'#fff'}}><p style={{'margin':'10px'}}>Timing :12/32/1233</p></div>
            <div style={{'backgroundColor':'#6A1B4D','color':'#fff'}}><p style={{'margin':'10px'}}>Total slot :30</p></div>
            <div style={{'backgroundColor':'#FF6666','color':'#fff'}}><p style={{'margin':'10px'}}>Total Booked :20</p></div>
        </Box>

        <form onSubmit={e => onhandleSubmit(e)} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              size="small"
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              size="small"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
              value={phone}
              onChange={e => setPhone(e.target.value)}
              size="small"
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone"
                type="number"
                id="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value={address}
              onChange={e => setAddress(e.target.value)}
              size="small"
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value={reason}
              onChange={e => setReason(e.target.value)}
              size="small"
                variant="outlined"
                required
                fullWidth
                name="Reason"
                label="Disease"
                type="text"
                id="reason"
                autoComplete="current-text"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Add Patient
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      
   </>   )}
   
     </div>
  );
}

export default Patient;