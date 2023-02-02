import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function DoctoreCity(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const schema = yup.object().shape({
    //     name : yup.string().required()
    // })

    return (
        <div>
            <h1>Doctore Component</h1>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Doctore</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                           Add Your Basic Information.
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            margin="dense"
                            id="age"
                            name="age"
                            label="Age"
                            type="number"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            margin="dense"
                            id="qua"
                            name="qua"
                            label="Qualification"
                            type="text"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            margin="dense"
                            id="des"
                            name="des"
                            label="des"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>


        </div>
    );
}

export default DoctoreCity;