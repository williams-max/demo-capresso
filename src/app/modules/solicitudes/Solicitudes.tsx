import { Typography, Button, Collapse, TextField, Modal } from '@mui/material'
import React, { useState } from 'react'
import Paleta from '../../../core/components/common/Paleta'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import ExplicitOutlinedIcon from '@mui/icons-material/ExplicitOutlined';


import FindInPageIcon from '@mui/icons-material/FindInPage';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useSolicitudes } from './useSolicitudes';
import { ModalPersonalized } from './components/ModalPersonalized';

const genders = [
  {
    value: 'M',
    label: 'Perfil01',
  },
  {
    value: 'F',
    label: 'Perfil012',
  },

];

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '38%',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Solicitudes = () => {

  //const { customModal, handleOpenModal } = useSolicitudes();
  const [openOne, setOpenOne] = useState(false);
  const handleClick = () => {
    setOpenOne(!openOne);
  };



  const [valueSelect, setValueSelct] = useState('Button Prueba');

  const handleChangeSelect = (event: any) => {
    //setAge(event.target.value);
    setValueSelct(event.target.value)
  };


  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const [openModal, setOpenModal] = useState(false);


  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  //two
  const [openModalDos, setOpenModalDos] = useState(false);


  const handleOpenModalDos = () => setOpenModalDos(true);
  const handleCloseModalDos = () => setOpenModalDos(false);
  //thre
  const [openModalTres, setOpenModalTres] = useState(false);
  const handleOpenModalTres = () => setOpenModalTres(true);
  const handleCloseModalTres = () => setOpenModalTres(false);
  return (
    <>

      <Button variant="contained" sx={{ backgroundColor: '#D32F2F' }} endIcon={<Select
        // labelId="demo-simple-select-label"
        // sx={{width:'400px'}}
        //  id="demo-simple-select"
        //  value={age}
        // label="Age"


        sx={{
          height: '30px',
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
          {
            border: 0,
          },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            border: 0,
          },
        }}
        onChange={handleChange}


      >
        <MenuItem value={10}><ExplicitOutlinedIcon sx={{ color: '#43A047' }} />  Excel</MenuItem>


      </Select>}

      >
        Descargar Reportes
      </Button >


      <Collapse in={openOne} timeout="auto" unmountOnExit>
        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          Excel
        </Typography>

      </Collapse>
      <div style={{
        backgroundColor: `#343A40`, padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center'

      }}
      // onClick={handleClick}
      >

        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          Solicitudes
        </Typography>

      </div>

      <div style={{
        padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'center', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center'

      }}
      // onClick={handleClick}
      >

        <TextField
          id="outlined-select-gender"
          select
          label={gender === "" ? "Perfil de Pedido" : ""}

          value={gender}
          onChange={handleChange}
          sx={{ width: '16%' }}
          InputLabelProps={{ shrink: false }}
          SelectProps={{
            MenuProps: {

            },
          }}
          margin="normal"
          variant="outlined"
        >
          {genders.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <FindInPageIcon sx={{ color: '#28A745', fontSize: '2.6rem' }}
          onClick={handleOpenModal}
        />
        <CleaningServicesRoundedIcon sx={{
          backgroundColor: '#DC3545', color: 'white', fontSize: '2.5rem', padding: '10px'
        }} onClick={handleOpenModalDos}/>

        <LockOutlinedIcon sx={{
          backgroundColor: '#757575', color: 'white', fontSize: '2.5rem',
          padding: '10px',
          margin: '5px'
        }} onClick={handleOpenModalTres}/>

        <KeyRoundedIcon sx={{
          backgroundColor: '#AD1457', color: 'white', fontSize: '2.5rem', padding: '10px',

          margin: '5px'
        }} />


        {/*<Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          Solicitudes
        </Typography>*/}

      </div>


      <Paleta name="test" color="rgb(147, 20, 151)" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <ModalPersonalized
        openModalPersonalized={openModal}
        handleOpenModalPersonalized={handleOpenModal}
        handleCloseModalPersonalized={handleCloseModal}
        description="Deseas cargar la sugerencia del perfil?, puedes perder toda informacion guardada anteriormente"
      />

      <ModalPersonalized
        openModalPersonalized={openModalDos}
        handleOpenModalPersonalized={handleOpenModalDos}
        handleCloseModalPersonalized={handleCloseModalDos}
        description="Deseas limpiar todas la modificaciones manuales?"
      />

      <ModalPersonalized
        openModalPersonalized={openModalTres}
        handleOpenModalPersonalized={handleOpenModalTres}
        handleCloseModalPersonalized={handleCloseModalTres}
        description="Deseas cerrar y guardar el formulario?"
      />
      {/*
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>

          <Typography id="modal-modal-description" sx={{
            mt: 2, textAlign: 'center', fontWeight: 'bold',
            fontSize: '1.5rem'
          }}>
            Deseas cargar la sugerencia del perfil?, puedes perder toda informacion guardada anteriormente
          </Typography>
          <br />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Button sx={{ backgroundColor: '#7066E0' }} variant="contained" >Si</Button>
            &nbsp; &nbsp;
            <Button sx={{ backgroundColor: '#DC3741' }} variant="contained" >No </Button>
            &nbsp; &nbsp;
            <Button sx={{ backgroundColor: '##6E7881' }} variant="contained" >Cancel</Button>
          </div>
        </Box>
      </Modal>
     */}
      {/*customModal()*/}
    </>
  )
}

export default Solicitudes