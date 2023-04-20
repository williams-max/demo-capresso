import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, CardActionArea, Checkbox, MenuItem, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
//import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import TableViewIcon from '@mui/icons-material/TableView';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RecommendIcon from '@mui/icons-material/Recommend';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";


import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import { Controller, useForm } from "react-hook-form";

const tableStyling = {
  //padding: "0px 0px",
  backgroundColor: '#F2F2F2',
  padding: '0.8%',
  fontSize: '10px',
  borderRight: "1px solid #A7A7A7",
  borderBottom: "1px solid #A7A7A7",
  //borderRight: "2px solid black",



};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)"
    }
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#28A745"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200
    })
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box"
  }
}));
function createData(f0: any, f1: any, f2: any, f3: any) {
  return { f0, f1, f2, f3 };
}

const rows = [

  createData("1-Bebidas calientes con café", "Regular (Tamaño Unico)", "", "Unidad"),

];

var dataArray = [


  {
    id: 1,
    numero: 1,
    colone: 'Sucursal Pando',
    referencia: 'anular-factura'

  },

  {
    id: 2,
    numero: 2,
    colone: 'Sucursal Salamanca',
    referencia: 'anular-factura'

  },
  {
    id: 3,
    numero: 2,
    colone: 'Sucursal América Oeste',
    referencia: 'anular-factura'

  },
  {
    id: 4,
    numero: 2,
    colone: 'Sucursal Hupermall',
    referencia: 'anular-factura'

  },
  {
    id: 5,
    numero: 2,
    colone: 'Sucursal Lincoln',
    referencia: 'anular-factura'

  },
  {
    id: 6,
    numero: 2,
    colone: 'Sucursal Jordan',
    referencia: 'anular-factura'

  },
  {
    id: 7,
    numero: 2,
    colone: 'Sucursal América Este',
    referencia: 'anular-factura'

  },
  {
    id: 8,
    numero: 2,
    colone: 'Sucursal Cine Center',
    referencia: 'anular-factura'

  }

];

const genders = [
  {
    value: 'A',
    label: 'ACTIVO',
  },
  {
    value: 'B',
    label: 'INACTIVO',
  }


];


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function TablaChildUsuarioGeneral(props:any) {
  const{lista}=props;
  const { formState, handleSubmit, control, register, getValues, setValue } = useForm();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [infoText, setInfoText] = React.useState("a data");

  const [listDataSimulation, setListDataSimulation] = useState(dataArray);

  const defaultStyleTitle = true;
  const [gender, setGender] = React.useState("");


  const inactivo_parent = localStorage.getItem("inactivo_parent");
  const [valHead, setValHead] = useState(false)

  useEffect(() => {



    console.log(" valor recuperado en tabla usuario general *****", inactivo_parent)
    //  console.log(" get ... ", getValues())
    if (inactivo_parent) {
      const inactivo_parent_aux = JSON.parse(inactivo_parent)
      if (inactivo_parent_aux == true) {
        //setValue("inactivo_parent_child", true)
        setValue(`check0_${0}`, true)
        setValue(`check0_${1}`, true)
        setValue(`check0_${2}`, true)
        setValue(`check0_${3}`, true)
        setValue(`check0_${4}`, true)
        setValue(`check0_${5}`, true)
        setValue(`check0_${6}`, true)
        setValue(`check0_${7}`, true)

        setValHead(true)
      } else {
        setValHead(false)
        //setValue("inactivo_parent_child", false)
      }
      console.log("resuldato de conversion child ", inactivo_parent_aux)
    }

    // actulizar este valor inactivo_parent_suc
  }, [inactivo_parent]);

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const tableCellClickHandler = (e: any) => {
    //console.log((e.target as Element).innerHTML);
  };

  const tableHeaderClickHandler = (e: any) => {
    console.log("Detected Header Click");
    setSnackbarOpen(true);
    //    if (((e.target as unknown) as Cell).cellIndex) {
    if (((e.target)).cellIndex) {
      setInfoText("data");
    } else {
      setInfoText("title");
    }
  };

  const handleAlertClose = () => {
    setSnackbarOpen(false);
  };

  /*
  const myArray = [1, 2, 3, 4, 5];
  
  const index = myArray.indexOf(2);
  
  const x = myArray.splice(index, 1);
  */
  const history: any = [
    {
      date: '2020-01-05',
      customerId: '11091700',
      amount: 3,
    },
    {
      date: '2020-01-02',
      customerId: 'Anonymous',
      amount: 1,
    },
  ]
  function Row(props: any) {
    const { row,index } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>

        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell sx={{
            // backgroundColor: 'orange',
            padding: "0px 0px",
            width: '3.5%'
          }}>
            {/*
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </IconButton>*/}
          </TableCell>
          <TableCell
            sx={{
              // backgroundColor: 'gainsboro',
              padding: "0px 0px",

              // borderRight: "1px solid #A7A7A7",
              //  borderBottom: "1px solid #A7A7A7",
              fontWeight: 'bold',
              //backgroundColor: "#C8E6C9",
              paddingLeft: '6%',
              //borderBottom: "1px solid white",
              fontSize: "12px",
              width: '20%',
              minWidth:'200px'
              // fontSize: "1.1rem"
            }}
            align="left"
          >
            {row.nameL}


          </TableCell>
          <TableCell
            sx={{
              padding: "0px 0px",
              //   backgroundColor: 'goldenrod',
              // borderRight: "1px solid #A7A7A7",
              //     borderBottom: "1px solid #A7A7A7",
              fontWeight: 'bold',
              //backgroundColor: "#C8E6C9",
              paddingLeft: '10px',
              //borderBottom: "1px solid white",
              fontSize: "12px",
              width: '26%',
              // fontSize: "1.1rem"
            }}
            align="left"
          >
            {/*row.numfact*/}
            <Controller
              name={`check0_${index}`}
              control={control}
              render={({ field: props }: any) => (
                <Checkbox
                  {...props}
                  //checked={props.value}
                  icon={<LockOpenRoundedIcon sx={{ color: 'black' }}/>} checkedIcon={<LockSharpIcon sx={{ color: 'black' }} />}
                  sx={{ padding: 0, margin: 0 }}
                  size="small"
                  checked={!!props.value}
                  onChange={(e: any) => props.onChange(e.target.checked)}
                />
              )}
            />
            {/* <Checkbox {...label} icon={<LockSharpIcon sx={{ color: 'black' }} />} checkedIcon={<LockOpenRoundedIcon />} />*/}
            {/* <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
         
              {valHead == true ?
                <CardActionArea sx={{
                  padding: '0', margin: '0', marginTop: '3px', width: '42px',
                }} onClick={() => console.log("valor de ini ", inactivo_parent)}
                >

                  <LockSharpIcon />
                </CardActionArea> :
                <CardActionArea sx={{
                  padding: '0', margin: '0', marginTop: '3px', width: '42px',
                }} onClick={() => console.log("valor de ini333 ", inactivo_parent)}
                >
                  <LockOpenRoundedIcon />
                </CardActionArea>}
            </FormGroup>*/}

          </TableCell>
        </TableRow>

      </React.Fragment >
    );
  }
  return (
    <div style={{ margin: 0, padding: 0 }}>


      <TableContainer
        onClick={() => {
          console.log("Detected Table Container Click");
        }}
        component={Paper}
        sx={{
          // border: "4px solid rgba(0,0,0,0.2)",
          //padding: 1,
          // height: '420px',
          margin: '0px', padding: '0px', marginTop: '5px'

          //   width: "max-content"
          //backgroundColor: "blue"
        }}
      >
        <Table sx={{ tableLayout: "auto" }}>
          {/*<TableHead onClick={tableHeaderClickHandler} style={{
            //  borderTopColor: 'black',
            //  borderTopStyle: 'double'

          }}>
            <TableRow
              onClick={() => {
                console.log("Detected Row Click");
              }}
              sx={{
                //  backgroundColor: "#BCEAFD",
                //borderBottom: "2px solid black",
                display: 'none',

                "& th": {
                  fontSize: "12px",
                  //fontSize: "0.8rem",
                  //  height: "5px",
                  // color: "black",
                  //  borderBottom: "1px solid white",

                }
              }}
            >
              <TableCell
                onClick={() => {
                  console.log("Detected Cell Click");
                }}
                sx={{
                  ...tableStyling,
                  width: '40%',

                  // backgroundColor: "red",
                  //  paddingLeft: '10px',
                  // fontWeight: 'bold',


                }}
                align="left"
              >
                N°
              </TableCell>


              <TableCell sx={{ ...tableStyling, width: '20%', borderLeft: "1px solid white" }} align="left">
                Accion
              </TableCell>


            </TableRow>
          </TableHead>*/}
          <TableBody>
            {lista?.map((row: any, index: any) => (
              <Row key={index} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>


    </div>
  );
}
