import React, { useState } from 'react';
import { Button, ButtonGroup, Container } from '@material-ui/core';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateItem from '../components/modals/CreateItem';

export default function Admin() {

  const [openBrand, setOpenBrand] = useState(false)
  const [openType, setOpenType] = useState(false)
  const [openItem, setOpenItem] = useState(false)
  const handleOpenBrand = () => setOpenBrand(true);
  const handleOpenType = () => setOpenType(true);
  const handleOpenItem = () => setOpenItem(true);

  const buttons = [
    <Button key="addType" onClick={handleOpenType}>add Type</Button>,
    <Button key="addBrand" onClick={handleOpenBrand}>add Brand</Button>,
    <Button key="addItem" onClick={handleOpenItem}>add Item</Button>,
  ];
    return (<>
<Container
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
      {/* <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup> */}
    </Container>
    <CreateType open={openType} setOpen= {setOpenType} ></CreateType>
    <CreateBrand open={openBrand} setOpen={setOpenBrand} ></CreateBrand>
    <CreateItem open={openItem} setOpen={setOpenItem} ></CreateItem>
  </>);
}