import React, { useState } from 'react';
import { Button, Box, Modal, TextField, Stack } from '@material-ui/core';
import { ProductsActionCreators } from '../../store/redusers/products/actionCreators';
import { useDispatch } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

export default function CreateType({open, setOpen}) {
    const [value, setValue] =  useState('');
    const dispatch = useDispatch();
    const handleClose = () => setOpen(false);
    const handleSubmit = () => {
      dispatch(ProductsActionCreators.createType(value));
      setValue('')
    }
    return (
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box component="form" sx={style}>
            <TextField  id="add-type-field" label="Add Type..." variant="outlined" 
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <Stack direction="row" spacing={2} sx={{justifyContent: 'center', mt: 2}}>
            <Button variant="outlined" onClick={handleClose} color="primary">Cancel</Button>
            <Button color="primary" variant="contained" onClick={handleSubmit} >Add</Button>
            </Stack>
          </Box>
        </Modal>
    );
  }