import React from 'react'
import InventarioCierre from '../../app/modules/inventario-cierre/InventarioCierre';
import Solicitudes from '../../app/modules/solicitudes/Solicitudes';
import MuiNavbar from '../../core/components/navbar/MuiNavbar';

const SolicitudesPage = () => {
    return (
        <>
            <MuiNavbar>
                <Solicitudes />
            </MuiNavbar>
        </>

    )
}

export default SolicitudesPage;
