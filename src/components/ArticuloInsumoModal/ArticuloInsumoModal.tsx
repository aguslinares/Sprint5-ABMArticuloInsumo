import { Button, Form, FormLabel, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import * as Yup from 'yup';
import {useFormik} from "formik";
import { ArticuloInsumoService } from "../../services/ArticuloInsumoService";
import { toast } from "react-toastify";
import ArticuloInsumo from "../../types/ArticuloInsumo";

type ArticuloInsumoModalProps = {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    art: ArticuloInsumo;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArticuloInsumoModal = ({show,onHide,title,modalType,art,refreshData}: ArticuloInsumoModalProps) =>{
    
    //CREATE - UPDATE
    const handleSaveUpdate = async (art: ArticuloInsumo) =>{
        try {
            const isNew =art.id ===0;
            if(isNew){
                await ArticuloInsumoService.createArticuloInsumo(art);
            } else {
                await ArticuloInsumoService.updateArticuloInsumo(art.id,art);
            }
            toast.success(isNew ? "Artículo insumo creado" : "Artículo insumo actualizado", {
                position: "top-center",
            });
            onHide();
            refreshData(prevState=> !prevState);
        } catch (error) {
            console.error(error);
            toast.error("Ocurrió un error");
        }
    };

    //DELETE
    const handleDelete = async () => {
        try {
            await ArticuloInsumoService.deleteArticuloInsumo(art.id);
            toast.success("Se eliminó con éxito",{
                position : "top-center",
            });
            
            onHide();
            refreshData(prevState=> !prevState);

        } catch (error) {
            console.error(error);
            toast.error("Ocurrió un error");
        };
    }

    //YUP ESQUEMA VALIDACION
    const validationSchema = ()=> {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            denominacion: Yup.string().required('Se requiere el nombre del artículo insumo'),
        });
    };

    //FORMIK UTILIZA ESTO PARA CREAR UN FORMULARIO DINAMICO Y QUE LO BLOQUEE EN CASO DE HABER ERRORES
    const formik = useFormik({
        initialValues: art,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: ArticuloInsumo) => handleSaveUpdate(obj), 
    });

    return (
        <>
            {modalType=== ModalType.DELETE ?(
                <>
                    <Modal show={show} onHide={onHide} centered backdrop="static">
                        <Modal.Header>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>¿Está seguro de la irreversibilidad de sus actos de borrar <br />
                            <strong>{art.denominacion}</strong>? </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ) : (
                <>
                    <Modal show ={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           <Form onSubmit={formik.handleSubmit}>
                                <Form.Group>
                                    <FormLabel> Denominacion </FormLabel>
                                    <Form.Control 
                                        name= "denominacion"
                                        type= "text"
                                        value={formik.values.denominacion}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.denominacion && formik.touched.denominacion)}
                                    />
                                    <Form.Control.Feedback type= "invalid">
                                            {formik.errors.denominacion}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Modal.Footer className="mt-4">
                                        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                                        <Button variant="primary" type="submit" disabled={!formik.isValid}>Guardar</Button>
                                </Modal.Footer>
                           </Form>
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </>
    )
}

export default ArticuloInsumoModal