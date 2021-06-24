import React from 'react';
import {makeStyles,TextField,Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container:{
        
       marginTop:theme.spacing(2),
        padding:theme.spacing(2),
        
    },
    textField:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    main:{
       display:'flex',
       justifyContent:'space-between',
       alignItems:'center',
        
    }
}))
const EditEvent = (props) => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.main}>
            <form className={classes.container}>
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />

                <TextField
                    id="time"
                    label="Start Timing"
                    type="time"
                    defaultValue="07:30"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                <TextField
                    style={{marginTop:'12px'}}
                    id="time"
                    label="End Timing"
                    type="time"
                    defaultValue="07:30"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                 <TextField
                    style={{marginTop:'12px'}}
                    id="text"
                    label="Enter Interval" 
                    type="input"
                    value="12"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                <Button style={{'marginTop':'25px','float':'right'}} color="primary" variant="contained">Save Changes</Button>
                
                </form>
<br></br>
               
        </div>
        <div style={{display:'flex'}}>
                     <Button onClick={() => {props.onClickBack()}}>Go Back</Button> 
                </div>
        </>
    )

};

export default EditEvent;