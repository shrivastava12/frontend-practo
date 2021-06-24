import { Container, Grid, TextField, FormLabel, RadioGroup, FormControlLabel, Paper, Radio, FormControl, InputLabel, Button, Box, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: '50%',
  },
  formControl: {
    marginTop: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),

  },
  paper: {
    padding: theme.spacing(3),
  }
}));


const AddPatient = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const [age, setAge] = React.useState('');

  const handleChange1 = (event) => {
    setValue(event.target.value);
  };



  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const d = new Date();
  const date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  return (
    <>

      <Paper elevation={3} className={classes.paper}>

        <Box>
          <Typography variant="h6" color="">
              Add Patient
          </Typography>
        </Box>


        <form>
          <Grid container>
            <Grid item sm={6} xs={6}>
              <TextField margin="dense" style={{ 'width': '80%' }} size="small" id="outlined-basic" label="Full Name" variant="outlined" />
              <TextField margin="dense" style={{ 'width': '80%' }} fullWidth size="small" id="outlined-basic" label="Email" variant="outlined" />
              <TextField margin="dense" style={{ 'width': '80%' }} fullWidth size="small" id="outlined-basic" label="Mobile" variant="outlined" />
              <TextField margin="dense" style={{ 'width': '80%' }} fullWidth size="small" style={{ 'width': '80%' }} id="outlined-basic" label="City" variant="outlined" />


            </Grid>
            <Grid item sm={6} xs={6}>

              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" style={{ 'display': 'flex', flexDirection: 'row' }} name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>

              <TextField
                id="datetime-local"
                label="Select DateTime"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }} />
              <br></br>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Payment status</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange1}
                  label="Payment status"
                >

                  <MenuItem value={10}>Success</MenuItem>
                  <MenuItem value={20}>Due</MenuItem>
                </Select>
              </FormControl>

              <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start', width: '80%' }}>

                <Button variant="contained" color="primary">
                  Submit
                </Button>
                <Button style={{ marginLeft: '10px' }} variant="contained">Reset</Button>
              </div>


            </Grid>
          </Grid>


        </form>

      </Paper>

    </>
  )

};

export default AddPatient;