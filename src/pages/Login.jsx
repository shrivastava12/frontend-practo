import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link,Redirect} from 'react-router-dom';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'react-toastify/dist/ReactToastify.css';
import { loginUsingEmailorNumber,loginUsingOtp,verifyOtp } from '../redux/actions/authAction';
import {connect} from 'react-redux'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Practo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    alignSelf:'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  otp:{
    height:'20px',
    width:'20%'
  }
}));

const Login =  ({loginUsingEmailorNumber,isAuthenticated,loginUsingOtp,otpId,error,verifyOtp}) =>  {
  const classes = useStyles();
  console.log(otpId)

    const [email,setEmail] =  useState('');
    const [password,setPassword] = useState('');
    const [phoneNo,setPhoneNo] = useState('');
    
    const [otp,setOtp] = useState('');


    const [value, setValue] = React.useState('doctors');
   
    const handleChange1 = (event) => {
      setValue(event.target.value);
      console.log(value)
    };

   
  
    // Login using email
    const onLoginWithEmailorNumber = (e) => {
        e.preventDefault();
        loginUsingEmailorNumber(email,password)    
    }


    // Login Using otp
    const gettingOtp = (e) => {
      console.log(phoneNo)
        e.preventDefault();
        loginUsingOtp(phoneNo,value);
    }
   
    const handleLoginUsingOtp = (e) => {
      e.preventDefault('')
      verifyOtp(otpId,otp,value);
    }
    
   if(isAuthenticated === true){
     return <Redirect to='/' />
   }


  return (
    <>
    
    <ToastContainer/>
    <Container  component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        
       
        {error !== undefined ? <h2>{error}</h2>:null }
          <div style={{'display':'flex','flexDirection':'row','height':'50px','alignItems':'center','justifyContent':'space-between','backgroundColor':'#CAD5E2','padding':'5px'}}>

               <p style={{'fontSize':'20px'}}>SignIn</p>
                
                  <RadioGroup aria-label="type" style={{ 'display': 'flex', flexDirection: 'row','margin':0,'padding':0 }} name="type" value={value} onChange={handleChange1}>
                  <FormControlLabel value="doctors" control={<Radio />} label="Doctor" />
                  <FormControlLabel value="compounders" control={<Radio />} label="Compounder" />
                
                </RadioGroup>

            </div>
        <form  onSubmit={onLoginWithEmailorNumber} className={classes.form}>
          <TextField
            size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email or Phone"
            name="email"
            autoComplete="text"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <br/>
            <Typography color='textPrimary' component="h4" align="center" >
                 Or
            </Typography>
        </form>

    <form  className={classes.form}>
    <TextField
            size="small"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="number"
            label="Enter your phone number"
            name="number"
            autoComplete="number"
            value={phoneNo}
            disabled={otpId !== undefined ? true : false}
            onChange={e => setPhoneNo(e.target.value)}
            autoFocus
          />
          {
              otpId !== undefined ? ( <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <TextField
                value={otp}
                onChange={e => setOtp(e.target.value)}
                name="otp"
                size="small"
                required
                autoFocus
                autoComplete="number"

              />  </div>
              ) : null
          }

          {
              otpId !== undefined ?<>  <Button
              type="submit"
              color="primary"
              className={classes.submit}
            >
            Resend OTP</Button>
             <Button style={{float:'right'}}
              type="submit"
              onClick={e => handleLoginUsingOtp(e)}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            Verify</Button>     </>  :
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e => gettingOtp(e)}
            >
             Get OTP
            </Button>   
          }
        
         
    </form>
    
        <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/signup' variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated,
  otpId:state.auth.id,
  error:state.auth.error
});


export default connect(mapStateToProps,{loginUsingEmailorNumber,loginUsingOtp,verifyOtp})(Login);