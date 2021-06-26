import React from 'react'
import { Paper, Card, Typography, makeStyles, Button, Grid, Modal } from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddCompounder from './AddCompounder';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#eef",
        padding:theme.spacing(1)
    },
    pageHeader: {
        padding: theme.spacing(1),
        display: 'flex',
        // marginBottom: theme.spacing(1)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(0),
        color: '#3c44b1',
        marginLeft: theme.spacing(2)
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        },

    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, handleOpen, handleClose, open } = props;

    return (
        <Paper elevation={0} square className={classes.root}>

            <Grid container spacing={3} >
                <Grid className={classes.pageHeader} item xs={6}>
                    <Card className={classes.pageIcon}>
                        <AccountBoxIcon />
                    </Card>
                    <div className={classes.pageTitle}>
                        <Typography
                            color="primary"
                            variant="h6"
                            component="div">
                            {title}</Typography>

                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ float: 'right' }}>
                    <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: '5px', marginRight: '5px' }} 
                    startIcon={<AddIcon />}
                    onClick={e => handleOpen()}
                >
                    Create Compounder
                </Button>
                        {/* <Button color="secondary"  variant="contained" onClick={e => handleOpen()} >Create New</Button> */}
                    </div>

                </Grid>

            </Grid>

            <Modal open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                <AddCompounder />
            </Modal>


        </Paper>
    )
}