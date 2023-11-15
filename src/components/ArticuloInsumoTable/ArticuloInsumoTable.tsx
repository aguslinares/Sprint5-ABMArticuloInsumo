import { useEffect, useState } from "react";
import { ArticuloInsumo } from "../../types/ArticuloInsumo";
import { ArticuloInsumoService } from "../../services/ArticuloInsumoService";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalType";
import ArticuloInsumoModal from "../ArticuloInsumoModal/ArticuloInsumoModal";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
    
const ArticuloInsumoTable =()=>{

    //VARIABLE QUE CONTIENE DATOS RECIBIDOS POR LA API
    const[articulosInsumo, setArticulosInsumo] =useState<ArticuloInsumo[]>([]);

    //VARIABLE QUE MUESTRA EL LOADER HASTA QUE SE RECIBAN DATOS DE LA API
    const [isLoading, setIsLoading] = useState(true);

    //ACTUALIZA LA TABLA DESPUES DE CADA OPERACION EXITOSA
    const [refreshData, setRefreshData] = useState(false);

    //HOOK QUE SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE O REFRESH DATA CAMBIE DE ESTADO
    useEffect(()=>{
        //LLAMAMOS A LA FUNCION PARA OBTENER LOS PRODUCTOS DECLARADOS POR EL PRODUCT SERVICE
        const fetchArticulosInsumo = async()=>{
            const articulosInsumo = await ArticuloInsumoService.getArticulosInsumo(); 
            setArticulosInsumo(articulosInsumo);
            setIsLoading(false);
        };

        fetchArticulosInsumo(); 
    },[refreshData]);

    //TEST, LOG MODIFICADO PARA QUE MUESTRE LOS DATOS MAS LEGIBLE
    console.log(JSON.stringify(articulosInsumo,null,2));
    //STRINGIFY ES CONVERTIR OBJETO JAVASCRIPT EN CADENA JSON

    //CONST PARA INICIALIZAR UN PRODUCTO POR DEFECTO Y EVITAR EL "undefined"

        const initializableNewArticuloInsumo = (): ArticuloInsumo=>{
            return {
                id:0,
                denominacion:"",
                urlImagen: "",
                precioCompra: 0,
                stockActual: 0,
                stockMinimo: 0,
                
            };
        };


        //PRODUCTO SELECCIONADO QUE SE VA A PASAR COMO PROP AL MODAL
        const [articuloInsumo, setArticuloInsumo] = useState<ArticuloInsumo>(initializableNewArticuloInsumo);

        //CONST PAR MANEJAR ESTADO DEL MODAL
        const [showModal, setShowModal] = useState(false);
        const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
        const [title,setTitle]=useState("");

        //LOGICA DEL MODAL
        const handleClick = (newTitle:string, art:ArticuloInsumo,modal: ModalType)=>{
            setTitle(newTitle);
            setModalType(modal);
            setArticuloInsumo(art);
            setShowModal(true);
        };

    return (
        <>
        <Button onClick={()=> handleClick("Nuevo Artículo Insumo", initializableNewArticuloInsumo(),
        ModalType.CREATE)}> Nuevo Artículo Insumo </Button>
            {isLoading ? <Loader/> :(
                <Table hover>
                    <thead>
                        <tr>
                            <th>Denominacion</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articulosInsumo.map( articuloInsumo => (
                            <tr key={articuloInsumo.id}>
                                <td>{articuloInsumo.denominacion}</td>
                                <td><EditButton onClick={()=> handleClick("Editar artículo insumo", articuloInsumo, ModalType.UPDATE)}/></td>
                                <td><DeleteButton onClick={()=> handleClick("Borrar artículo insumo", articuloInsumo, ModalType.DELETE)}/></td>
                            </tr>
                        )

                        )

                        }
                    </tbody>
                  
                </Table>
            )}

            {showModal && (
                <ArticuloInsumoModal
                show={showModal}
                onHide={()=>setShowModal(false)}
                title={title}
                modalType={modalType}
                art={articuloInsumo}
                refreshData={setRefreshData}
                />
            )

            }
        </>
    )
}


export default ArticuloInsumoTable;