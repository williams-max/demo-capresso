import { Typography, Button, Collapse, TextField, Modal, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
import SearchIcon from '@mui/icons-material/Search';
import TableViewIcon from '@mui/icons-material/TableView';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



import { ModalPersonalized } from './components/ModalPersonalized';
import TablaVenta from './TablaVenta';
import { ModalForm } from './components/ModalForm';
import Demo from './components/Demo';
import { ModalTabla } from './components/ModalTabla';
import SearchBar from '@mkyy/mui-search-bar';
import dataUserJson from '../../../data/ventas/dataVentasJson.json'
import { DesktopDatePicker } from '@mui/x-date-pickers';
//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
//import dayjs from 'dayjs';


const genders = [
  {
    value: 'M',
    label: 'Bebidas Calientes con Cafe',
  },
  {
    value: 'F',
    label: 'Resposteria',
  },
  {
    value: 'F',
    label: 'Frutas Naturales',
  },
  {
    value: 'F',
    label: '1 Extras de Desayunos',
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

const Venta = () => {


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


  //star llamar a api
  useEffect(() => {

  }, []);


  return (
    <>



      <div style={{
        backgroundColor: '#DC3545', padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center', marginBottom: '5px'

      }}
      // onClick={handleClick}
      >

        <Typography variant="subtitle1" gutterBottom sx={{
          marginLeft: '15px',
          color: 'white', alignItems: 'center'
        }} >
          Reimpresion o Anulacion - Sucursal Pando
        </Typography>

      </div>

    
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker sx={{ width: '190px',height:'10px' }}
          onChange={(newValue:any) => {
          }}
          slotProps={{ textField: { size: 'small' } }} 

        />
      </LocalizationProvider>


      <br />

   

 
    </>
  )
}

export default Venta