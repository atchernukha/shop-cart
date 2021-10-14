import React, { useEffect, useState } from 'react';
import { Button, Box, Modal, TextField, InputLabel, Select, MenuItem, FormControl, Stack } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActionCreators } from '../../store/redusers/products/actionCreators'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateItem({ open, setOpen }) {
    const [form, setForm] = useState({ type: '', brand: '', itemName: '', price: 0, file: null, info: '' })
    const { types, brands } = useSelector(state => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ProductsActionCreators.fetchTypes())
        dispatch(ProductsActionCreators.fetchBrands())
    }, [])
    const handleClose = () => setOpen(false);
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };
    const handleSubmit = () => { };
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box component="form" sx={style}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                        labelId="type-label"
                        id="type-select"
                        name='type'
                        value={form.type}
                        onChange={handleChange}
                        label="Type"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {types.map(type => <MenuItem value={type.name}>{type.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="brand-label">Brand</InputLabel>
                    <Select
                        labelId="brand-label"
                        id="brand-select"
                        name="brand"
                        value={form.brand}
                        onChange={handleChange}
                        label="Brand"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {brands.map(brand => <MenuItem value={brand.name}>{brand.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <TextField
                    id="itemName"
                    label="Product Name"
                    name="itemName"
                    value={form.itemName}
                    sx={{ mt: 3 }}
                    fullWidth
                    onChange={handleChange}
                />
                <label htmlFor="contained-button-file">
                    <input accept="image/*" id="contained-button-file" multiple type="file" sx={{ display: 'none' }} />
                    <Button variant="contained" component="span">
                        Upload
                    </Button>
                </label>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mt: 2 }}>
                    <Button variant="outlined" onClick={handleClose} color="primary">Cancel</Button>
                    <Button color="primary" variant="contained" onClick={handleSubmit} >Add</Button>
                </Stack>
            </Box>
        </Modal>
    );
}