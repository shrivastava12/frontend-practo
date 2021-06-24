import { Toolbar,InputAdornment,makeStyles ,Button,TextField} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import { fetchPatient } from '../redux/actions/patienAction';

import TablePatient from '../components/TablePatient';
const useStyles = makeStyles(theme => ({
    container:{
        maxHeight:440
    },
    margin:{
        margin:theme.spacing(0),
        width:'75%'
    },
    button:{
        position: 'absolute',
        right: '10px'
    }
}))
const Patient = ({fetchPatient,data}) => {
    const classes = useStyles();
  
  
   

  
    // For search
    const handleChange   = e => {

    }

    // For addNew patient

    const handleNewPatient = () => {
        console.log('sdfsd')
        
    }


  
    

    return(
        <div>
             <Toolbar>
             <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Search Patient"
                variant="outlined"
                size="small"
                onChange={handleChange}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                ),
                }}
             />
                <Link to="/patient/addPatient" className={classes.button}>
                <Button
                    variant="contained"
                    color="primary"
                    
                    startIcon={<AddIcon />}
                    onClick={handleNewPatient}
                >
                    Add Patient
                </Button>
                </Link>
             </Toolbar>
          

           <TablePatient/>
         
          
        </div>
    )
};

const mapStateToProps = state => ({
    data:state.patient.data
})


export default connect(mapStateToProps,{fetchPatient})(Patient);