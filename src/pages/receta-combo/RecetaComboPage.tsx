import React from 'react'
import InventarioCierre from '../../app/modules/inventario-cierre/InventarioCierre';
import RecetaCombo from '../../app/modules/receta/RecetaCombo';
//import Solicitudes from '../../app/modules/solicitudes/Solicitudes';
import MuiNavbar from '../../core/components/navbar/MuiNavbar';

const RecetaComboPage = () => {
    return (
        <>
            <MuiNavbar>
                <RecetaCombo />
            </MuiNavbar>
        </>

    )
}

export default RecetaComboPage;
