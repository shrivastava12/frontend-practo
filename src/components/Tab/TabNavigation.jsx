import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonalInfo from '../Doctor/PersonalInfo';
import Clinic from '../Doctor/Clinic';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightgrey',
    
  },
}));

const TabNavigation =  () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar color="transparent" style={{backgroundColor:'grey'}} elevation={0} position="relative">
        <Tabs style={{'color':'#fff'}} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Personal Info" {...a11yProps(0)} />
          <Tab label="Work" {...a11yProps(1)} />
          <Tab label="Academic" {...a11yProps(2)} />
          <Tab label="Clinic" {...a11yProps(2)}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
            <PersonalInfo/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Clinic/>
      </TabPanel>
    </div>
  );
}

export default TabNavigation;
