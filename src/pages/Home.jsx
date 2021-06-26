import React,{useState,useEffect} from 'react';
import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddPatient from '../components/AddPatient';
import SettingsIcon from '@material-ui/icons/Settings';
import {Button} from '@material-ui/core';
import CreateEvent from '../components/Event/CreateEvent';
import { fetchEvent } from '../redux/actions/eventAction';
import {connect} from 'react-redux' 

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


const Home = ({fetchEvent,events}) => {


  
  const [open, setOpen] = React.useState(false);

  
  useEffect(() => {
    fetchEvent()
  },[fetchEvent])
                

            const handleSelect = ({start,end}) => {
              const title1 = window.prompt('add event');
              const title =  `Total slot = ${title1}  Booked = ${0}`
              if(title1==null){
                return;
              }
            
              setEvents( [...events,{start,end,title}])
            }


          //   const getListOfSlots = async () => {
          //     try {
          //         const res = await axios({
          //             method: "GET",
          //             url: "http://www.syllabusapi.ml/events"
          //         });
          //         //const data = JSON.parse(res.data);
      
          //         const data  = res.data.map((e) => {
          //             console.log(e);
          //             let slotDate = new Date(e.slotDate);
          //             return ({
          //                 id: 90,
          //                 title: `${e.slotLength}`,
          //                 start: new Date(slotDate.getFullYear(), slotDate.getMonth(), slotDate.getDate()),
          //                 end: new Date(slotDate.getFullYear(), slotDate.getMonth(), slotDate.getDate()),
          //                 slot: ''
          //             });
          //         })
                  
          //         setEvents(...data)
          //     } catch (error) {
          //             console.log(errr)
          //     }
          // }


            const onSelectEvent = (event) => {
               console.log(event.slot)
            }


            // Create Event option

            const onClickCreate = () => {
              setOpen(true);
            }
           
            const handleOpen = () => {
              setOpen(true);
            };
          
            const handleClose = () => {
              setOpen(false);
            };
     
  return(


          <div>
              
            <div style={{height:'40px',marginTop:-15}}>
            <Button
                    variant="contained" color="secondary"
                    style={{ 'float':'right','marginLeft':'10px' }} 
                    size="small"
                    startIcon={<SettingsIcon/>}
                    onClick={() => {}}
                >
                    Settings
            </Button>
            <Button
                    variant="outlined" color="primary"
                    style={{ 'float':'right' }} 
                    startIcon={<AddIcon />}
                    size="small"
                    onClick={onClickCreate}
                >
                    Create Schedule
                </Button>
                
            </div>
              
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
      {/* <AddPatient slot={slot} /> */}
      <CreateEvent/>
      </Modal>
      </div>

  )
}

const mapStateToProps = state =>  ({
  events:state.event.event
})

export default connect(mapStateToProps,{fetchEvent})(Home);