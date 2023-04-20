import React from 'react'
import InventarioCierre from '../../app/modules/inventario-cierre/InventarioCierre';
import Solicitudes from '../../app/modules/solicitudes/Solicitudes';
import MuiNavbar from '../../core/components/navbar/MuiNavbar';


import { Box, styled, useTheme } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px'
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px'
        }
    }
}));
const SolicitudesPage = () => {
    return (
        <Container>
        <Solicitudes />
        </Container>
       
    )
}

export default SolicitudesPage;
