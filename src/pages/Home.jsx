import React,{useState} from 'react';
import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddPatient from '../components/AddPatient';
import {Button} from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height:500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
 
}));

const localizer = momentLocalizer(moment);


const Home = () => {

  
  const [open, setOpen] = React.useState(false);
  const[slot,setSlot] = useState({});
  const [name,setName] = useState('');
  
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('20:00');
  const [interval, setInterval] = useState(15);
  const [myEventsList, setMyEventList] = useState([])
  const [events,setEvents] =  useState([
                                          {
                                            start: moment().toDate(),
                                            end: moment()
                                                .add(1, "days")
                                                .toDate(),
                                            title: `Total slot = ${23}  Booked= ${0}`,
                                            
                                          },
                                       ])


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
                                
                                    const createSlot = (e) => {
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
                                
                                        const slotCounts = Math.abs(diffMinutes / parseInt(interval))
                                
                                        for (let i = 1; i <= slotCounts; i++) {
                                            const val = extendMinutes(initialDate, parseInt(interval))
                                            slotLists.push(val[0])
                                        }
                                       
                                        const title = '2'
                                        const start =  new Date(slotDate.getFullYear(), slotDate.getMonth(), slotDate.getDate())
                                        const end =  new Date(slotDate.getFullYear(), slotDate.getMonth(), slotDate.getDate())
                                        
                                        setMyEventList([...myEventsList,{start,end,title,slotLists}])
                                
                                    }
                                    console.log(myEventsList);

            const handleSelect = ({start,end}) => {
              const title1 = window.prompt('add event');
              const title =  `Total slot = ${title1}  Booked = ${0}`
              if(title1==null){
                return;
              }
            
              setEvents( [...events,{start,end,title}])
            }

            const onSelectEvent = (event) => {
               handleOpen();
               setSlot(event)
             

            }

            const handleOnSubmit = e => {
              e.preventDefault();   
              console.log(name)
            }
            const handleOpen = () => {
              setOpen(true);
            };
          
            const handleClose = () => {
              setOpen(false);
            };
     
  return(


          <div>
               <form style={{ margin: "20px",display:"flex",justifyContent:'space-between'}}>
                    <input type="text" placeholder="Enter Title of event" /><br></br>
                    <lable>Start Date</lable>
                    <input type="date" placeholder="Enter Title of event" onChange={(e) => { setStartDate(e.target.value) }} /><br></br>
                    <lable>Select Start Time</lable>
                    <input type="time" placeholder="Enter Title of event" onChange={(e) => { setStartTime(e.target.value) }} /><br></br>
                    <lable>Select End Time</lable>
                    <input type="time" placeholder="Enter Title of event" onChange={(e) => { setEndTime(e.target.value) }} /><br></br>
                    <input type="text" placeholder="Interval" onChange={(e) => { setInterval(e.target.value) }} /><br></br>
                    <select>
                        <option>Everyday</option>
                        <option>  </option>
                    </select>
                    <button onClick={createSlot}>Submit</button>
                </form>
            {/* <div style={{height:'40px',marginTop:-15}}>
            <Button
                    variant="outlined" color="primary"
                    style={{ 'float':'left' }} 
                    startIcon={<AddIcon />}
                    onClick={() => {}}
                >
                    Create Event
                </Button>
            </div> */}
              
          <Calendar
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "100vh" }}
          onSelectSlot={handleSelect}
          onSelectEvent={onSelectEvent}
          />
           <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
      >
      <AddPatient slot={slot} />
      </Modal>
      </div>

  )
}

    

export default Home;