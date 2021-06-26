import React,{useState,useEffect} from 'react';
import {Grid, makeStyles,TextField,Button} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${50}%`,
      left: `${50}%`,
      transform: `translate(-${50}%, -${50}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 500,
      height:500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    formControl: {
      width:'100%'
      },
      
  }));
const CreateEvent = () => {

            const classes =  useStyles();
            const [modalStyle] = React.useState(getModalStyle);
            const [startDate, setStartDate] = useState(null);
            const [startTime, setStartTime] = useState('08:00');
            const [endTime, setEndTime] = useState('20:00');
            const [range, setRange] = useState(15);
            const [repeate, setRepeate] = useState('');
            const [myEventList,setMyEventList] = useState([])
            useEffect(() => {
                getListOfSlots();
            }, [])
            

            function formatTime(s) {
                return s < 10 ? `0${s}` : s
            }
        
            function getMinutes(val) {
                return Math.abs(val / 1000 / 60)
            }
        
            function extendMinutes(date, interval) {
        
                const time = date.setMinutes(date.getMinutes() + interval)
                const hello = new Date(time)
                const formatedString = `${formatTime(hello.getHours())}:${formatTime(hello.getMinutes())}`
                return [formatedString, time];
            }
        
            function parseIntAndGet(val, delimiter = ':') {
                return val.split(delimiter).map(v => parseInt(v))
            }
         

            const onSubmit = (e) => {
                e.preventDefault();
                const slotLists = []
                const initialDate = new Date(startDate)
                initialDate.setHours(parseIntAndGet(startTime)[0])
                initialDate.setMinutes(parseIntAndGet(startTime)[1])
        
                const finalDate = new Date(startDate)
                finalDate.setHours(parseInt(endTime.split(":")[0]))
                finalDate.setMinutes(parseInt(endTime.split(":")[1]))
        
        
                const diffMinutes = getMinutes(finalDate - initialDate)
        
                console.log(Math.abs(diffMinutes / 15))
        
                const slotCounts = Math.abs(diffMinutes / parseInt(range))
        
                for (let i = 1; i <= slotCounts; i++) {
                    const val = extendMinutes(initialDate, parseInt(range))
                    slotLists.push(val[0])
                }
                (async () => {
                    await sendData(slotLists);
                })();
        
                console.log(slotLists);
        
            }
        
            const sendData = async (data) => {
                try {
                    const res = await axios({
                        method: "POST",
                        url: 'http://www.syllabusapi.ml/events',
                        data: {
                            "date": startDate,
                            "slots": data,
                            "startTime": startTime,
                            "endTime": endTime,
                            "interval": range
                        }
                    });
                    console.log(res.data);
                    getListOfSlots();
                } catch (error) {  
                    console.log(error)
                }
            }
           
            const getListOfSlots = async () => {
                try {
                    const res = await axios({
                        method: "GET",
                        url: "http://www.syllabusapi.ml/events"
                    });
                    //const data = JSON.parse(res.data);
        
                    const data  = res.data.map((e) => {
                        console.log(e);
                        let slotDate = new Date(e.slotDate);
                        return ({
                            id: 90,
                            title: `${e.slotLength}`,
                            start: new Date(slotDate.getFullYear(), slotDate.getMonth(), slotDate.getDate()),
                            end: new Date(slotDate.getFullYear(), slotDate.getMonth(), slotDate.getDate()),
                            slot: ''
                        });
                    })
                    
                 
                } catch (error) {
                        console.log(errr)
                }
            }

            



          
    return(
        <div style={modalStyle} className={classes.paper} >
            <form onSubmit={onSubmit}>
            <h2 style={{'textAlign':'center'}}>Create Schedule</h2>
            <Grid container>
                <Grid item xs={12} sm={12}>
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2017-05-24"
                     onChange={e => setStartDate(e.target.value)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
             </Grid>
        
            </Grid>
            <Grid container xs={6} sm={12} >
                <Grid item xs={6} style={{'paddingRight':'5px','marginTop':'6px'}}>
                <TextField
                    id="time"
                    label="Start Timing"
                    type="time"
                    onChange={e => setStartTime(e.target.value)}
                    fullWidth
                    InputLabelProps={{
                    shrink: true,
                    }}
                    // inputProps={{
                    // step: 300, // 5 min
                    // }}
                />
               
                </Grid>
                <Grid item xs={6} style={{'paddingLeft':'5px','marginTop':'6px'}}>
                    <TextField
                        
                        id="time"
                        label="End Timing"
                        type="time"
                        onChange={e => setEndTime(e.target.value)}
                        defaultValue="07:30"
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        // inputProps={{
                        // step: 300, // 5 min
                        // }}
                    />
                </Grid>
            </Grid>
            <Grid container xs={6} sm={12}>
                <Grid item xs={6}  style={{'paddingRight':'5px','marginTop':'6px'}}>
                <TextField
                            
                            id="time"
                            label="Set slot Interval"
                            type="input"
                            defaultValue="10"
                            fullWidth
                            value={range}
                            onChange = {e => setRange(e.target.value)}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            // inputProps={{
                            // step: 300, // 5 min
                            // }}
                        />
                </Grid>
                <Grid item xs={6}  style={{'paddingLeft':'5px','marginTop':'6px'}}>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Repeate</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={repeate}
                        onChange={e => setRepeate(e.target.value)}
                        >
                        <MenuItem value={'everyday'}>Everyday</MenuItem>
                        <MenuItem value={'weekly'}>weekly</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
                       
            <div style={{'display':'flex','justifyContent':'center','alignItems':'center','height':'50%'}}>
                    <Button variant="contained"  type="submit" color="primary">Create</Button>
            </div>
          </form>
                
        </div>
       
    )
};

export default CreateEvent;