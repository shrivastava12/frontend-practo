import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {FormControl,Select,InputLabel,MenuItem} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import apiAddress from '../config/apiAddress';


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
  formControl: {
    minWidth: 120,
  },
}));

const AddCompounder =  () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [message,setMessage] = useState('');
  const [clinic,setClinic] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));

  const onSubmit =  (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      return alert('Password does not matched');
    }

    const name = firstName + " " + lastName;
    const token = localStorage.getItem('token');
    console.log(token)
      try{
          const options = {
          headers:{
            'Content-Type':'application/json',
            'Authorizationtoken':`Bearer ${token}`
          }
        }
         Axios.post(`${apiAddress}/compounders`,{
            name:name,
            email:email,
            phone:phone,
            password:password
        },options).then((res) => {
          if(res.status === 201){
              setMessage(`Compounder is created`)
          }
        }).catch((err) => {
          setMessage(err.response.data.error)
        })
      }catch(e){
          console.log(e)
          setMessage(`some error`)
      }
  }

 
  return (
    <div style={modalStyle} className={classes.paper}>
            
      
        <CssBaseline/>
        <Typography style={{textAlign:'center',padding:'5px',color:'#fff',backgroundColor:'grey'}} component="h2" variant="h6">
          Add compunder
         
        </Typography>
        <Typography style={{textAlign:'right',color:'black'}}>
        {message}
        </Typography>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Select Clinic</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={clinic}
              onChange={e => setClinic(e.target.value)}
            >
            {
              user.clinics.map(item => (
              
                <MenuItem value={item._id}>{item._name}</MenuItem>
              ))
            }
             
              
            </Select>
          </FormControl>
        <form onSubmit={e => onSubmit(e)} className={classes.form} noValidate>
            
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
              value={email}
              onChange={e => setEmail(e.target.value)}
              size="small"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              value={password}
              onChange={e => setPassword(e.target.value)}
              size="small"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              size="small"
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
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
            Create
          </Button>
         
        </form>
      
     
   
     </div>
  );
}

export default AddCompounder;