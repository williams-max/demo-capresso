import React from 'react'
import InventarioCierre from '../../app/modules/inventario-cierre/InventarioCierre';
import RevisionPedido from '../../app/modules/revision-pedido/RevisionPedido';
import MuiNavbar from '../../core/components/navbar/MuiNavbar';

const RevsionPedidioPage = () => {
    return (
        <>
            <MuiNavbar>
                <RevisionPedido />
            </MuiNavbar>
        </>

    )
}

export default RevsionPedidioPage;
