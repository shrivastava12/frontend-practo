import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { makeStyles, } from '@material-ui/core';

import TableCompounder from '../components/TableCompounder';

const useStyles = makeStyles(theme => ({
    container: {
        maxHeight: 400
    },
    avatar: {

        backgroundColor: theme.palette.secondary.main,
    },
}));

const Compounder = () => {

    const user = JSON.parse(localStorage.getItem('user'));
   

    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


  
    const classes = useStyles();
    return (
        <>
            <PageHeader title="Compounder" open={open}  handleOpen={handleOpen} handleClose={handleClose} />
           {
               user.permissions.includes('view_compunder') ? ( <TableCompounder/> 
                ) : null
           }
           
        </>
    )
};

export default Compounder;