//import { AuthProvider } from './app/modules/auth/context'
//import { SplashScreenProvider } from './core/context/SplashScrean'
//import { BrowserRouter } from 'react-router-dom'
//import { Navigation } from './app/Navigation'

import React, { useState, useEffect } from 'react';



import { Typography, TextField, Button, InputAdornment, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from "react-hook-form";



import { styled } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";



const DisabledBackground = styled(Box)({
  width: "100%",
  height: "100%",
  position: "fixed",
  background: "#ccc",
  opacity: 0.5,
  zIndex: 1
});

const CircularLoading = () => (
  <>
    <CircularProgress
      size={70}
      sx={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2
      }}
    />
    <DisabledBackground />
  </>
);

const Login = () => {

//start config loading
  const [loading, setLoading] = useState({
 
    circular: false,

  });
  const clickHandler = (type: any) => {
    setLoading({ ...loading, [type]: true });
    setTimeout(() => setLoading({ ...loading, [type]: false }), 2000);
  };
//end confing loading 

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(prev => !prev);
  }
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: any) => {

    clickHandler("circular")
    console.log(data);
    const { user, pass } = data;
  
    try {
      const respuesta = await axios.post('http://192.168.0.20/SistemaGeneralB/index.php/login2', {
        // "user": "amondocorre",
        // "pass": "Capress0"

        "user": user,
        "pass": pass

      })
      console.log("res ", respuesta.data)
      if (respuesta?.data) {
        if (respuesta.data.status) {
          navigate('/home')
        } else {
          setErrorValueEmpty(true);
        }
      } else {
        setErrorValueEmpty(true);
      }

    } catch (error) {
      setErrorValueEmpty(true);
      // console.log(error)

    }
  };

  const navigate = useNavigate();

  const [textValue, setTextValue] = useState<string>("");

  const [errorValueEmpty, setErrorValueEmpty] = useState(false);
  const onTextChange = (e: any) => {
    console.log(" valor user ", e.target.value)
    setTextValue(e.target.value);
  }

  const [textPasswordValue, setTextPasswordValue] = useState<string>("");
  const onTextPasswordChange = (e: any) => {
    console.log(" valor user ", e.target.value)
    setTextPasswordValue(e.target.value);
  }



  const handleClickShowPassword = () => {
    
    setShowPassword(!showPassword);
  };
  return (
    <div style={{ backgroundColor: '#3C3C3C', width: '100%', height: '100vh' }}>
      <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column' }}>
        <br />
        <br />
        <br />
        <br />
        <div style={{ width: '18%', margin: 'auto', marginBottom: '8px' }}>
          <img style={{ width: '100%' }} src="https://sistemageneral.azurewebsites.net/assets/dist/img/logo.png" />
        </div>

        <form >
          <Box sx={{
            width: '100%', maxWidth: 390, margin: 'auto', backgroundColor: 'white'
            ,
          }}>

            {errorValueEmpty ? <>
              <div style={{
                backgroundColor: '#DC3545', margin: '5%', display: 'flex', flexDirection: 'row'
                , padding: '7%'
              }}>
                <Typography variant="subtitle1" gutterBottom sx={{
                  color: 'white'
                  , textAlign: 'center',
                  borderRadius: '5px', fontSize: '13px',
                }}>
                  Usuario no encontrado, verifique usuario y contraseña
                </Typography>
                <CloseIcon onClick={() => setErrorValueEmpty(false)} sx={{ fontSize: '12px' }} />
              </div>
            </> : <></>}

            <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: '#666666' }}>
              Usuario
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Controller
                name={"user"}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField id="outlined-basic" label="Usuario" variant="outlined" sx={{
                    width: '90%',
                  }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}

                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <PersonIcon sx={{ color: '#777777' }} />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
                //rules={{ required: true}}
                rules={{ required: 'Completa este campo' }}
              />
            </div>



            <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: '#666666' }} >
              Contraseña
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Controller
                name={"pass"}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField id="outlined-basic" label="Contraseña" variant="outlined" sx={{ width: '90%' }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}

                    type={showPassword ? 'text' : 'password'}

                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>

                          {showPassword ? <VisibilityOffIcon onClick={() => handleClickShowPassword()}
                          /> : <VisibilityOffIcon onClick={() => handleClickShowPassword()} />}
                        </InputAdornment>
                      )
                    }}
                  />
                )}
                //rules={{ required: true}}
                rules={{ required: 'Completa este campo' }}
              />


            </div>


            {/*
            <TextField id="outlined-basic" label="Contraseña" variant="outlined" sx={{ width: '80%', marginLeft: '15px' }}
              value={textPasswordValue}
              onChange={onTextPasswordChange}

              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <VisibilityOffIcon sx={{ color: '#777777' }} />
                  </InputAdornment>
                )
              }}
            />*/}

            <br />
            {/*loading.circular ? <CircularLoading /> : null*/}
            <Button variant="contained" sx={{ marginTop: '5%', marginLeft: '69.5%' }}

              onClick={handleSubmit(onSubmit)}
            >Ingresar</Button>
            <Typography variant="body1" gutterBottom sx={{ color: '#666666', marginLeft: '20px', paddingBottom: '0px' }}>
              V. 1.0.8 General
            </Typography>

          </Box>
        </form>
      </div>
    </div>
  )
}

export default Login
