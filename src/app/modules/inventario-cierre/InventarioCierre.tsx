import { Typography, Button, Collapse } from '@mui/material'
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


const InventarioCierre = () => {

  const [openOne, setOpenOne] = useState(false);
  const handleClick = () => {
    setOpenOne(!openOne);
  };

  const [age, setAge] = React.useState('Button Prueba');

  const handleChange = (event: any) => {
    //setAge(event.target.value);
  };


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
        <MenuItem value={10}><ExplicitOutlinedIcon sx={{color:'#43A047'}}/>  Excel</MenuItem>


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
          Inventario
        </Typography>
        <div>
          <SendIcon sx={{ color: 'white' }} />
        </div>
      </div>


      <Paleta name="test" color="rgb(147, 20, 151)" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />

      <Paleta name="test" color="#DC3545" COLOR_R="147" COLOR_G="20" COLOR_B="151" />
    </>
  )
}

export default InventarioCierre