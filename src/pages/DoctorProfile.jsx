import React from 'react';
import {Container,makeStyles,CardMedia} from '@material-ui/core';
import TabNavigation from '../components/Tab/TabNavigation';


const useStyles = makeStyles((theme) => ({
    
    head:{
        height:'180px',
        backgroundColor:'grey',
    },
    profile:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        
        
    },
    media:{
        height:'150px',
        width:'150px',
        borderRadius:150/2,
        alignSelf:'center',
        marginTop:'20px',
    },
    right:{
        marginLeft:'20px'
    }

}))


const DoctorProfile = () => {

    const classes = useStyles();
    return(

        <div>
            <Container className={classes.head}>
                <div className={classes.profile}>
                    <CardMedia image="https://picsum.photos/200" title="image" className={classes.media} />
                <div className={classes.right}>
                    <h2 style={{'margin':0,'padding':0,'color':'#fff'}}>Dr Abishek Kumar</h2>
                    <p style={{'color':'#fff'}}>abishek@gmail.com</p>
                </div>
                </div>
               
            </Container>
            <TabNavigation/>
        </div>
    )
};

export default DoctorProfile;