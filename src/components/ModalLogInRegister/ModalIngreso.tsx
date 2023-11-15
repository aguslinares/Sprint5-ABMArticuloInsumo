import {Modal, Form } from "react-bootstrap";
/*import * as Yup from 'yup';*/
import {Formik, Field} from "formik";
import axios from "axios";
import BotonRegistrarse from "./BotonRegistrarse";
import BotonLogin from "./BotonLogin";
import { Toaster, toast } from "react-hot-toast";

type ModalIngresoProps = {

    show: boolean;
    onHide:() => void;
}

const postURL = 'http://localhost:8080/auth/registerUser';


const ModalIngreso = ({show, onHide}: ModalIngresoProps) => {

/*
    const validationSchema = Yup.object({
      firstname: Yup.string().required('Por favor, ingrese un nombre'),
      lastname: Yup.string().required('Por favor, ingrese un apellido'),
      username: Yup.string().required('Por favor, ingrese un usuario'),
      telefono: Yup.number().min(0).required('Por favor, ingrese un numero de telefono'),
      password: Yup.string()
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(20, 'La contraseña no debe superar los 20 caracteres')
            .required('Por favor, ingrese una contraseña'),
            repeatPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Las contraseñas deben coincidir')
            .required('Por favor, repita la contraseña'),
            email: Yup.string().email('Formato de email no valido').required('Por favor, ingrese una direccion de correo electronico'),
            direccion: Yup.string().required('Por favor, ingrese una direccion'),
            departamento: Yup.string().required('Por favor, ingrese un departamento'),
            fechaNacimiento: Yup.string().required('Por favor, ingrese una fecha de nacimiento')
        });
    
  */
    return (

      <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            username: '',
            telefono: '',
            password: '',
            repeatPassword: '',
            email: '',
            direccion: '',
            departamento: '',
            fechaNacimiento: ''
          }}
          onSubmit={(values, actions) => {
            if(values != null){            
              axios.post(postURL,values);
              toast.success('Se ha registrado exitosamente')
              console.log(values);
              actions.setSubmitting(false);
              onHide(); // Cierra el modal después de enviar el formulario
            }else{
              toast.error('Error');
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div id="contenedorBotonesRegistrarseIngresar">
                  <div id="fondoBotonesRegistrarseIngresar">
                      <button className="botonParteSuperiorFormulario"><BotonRegistrarse/></button>
                      <button className="botonParteSuperiorFormulario"><BotonLogin/></button>
                  </div>
              </div>
              <div id="contenedorCamposFormulario">
              <div className="columna">
              <div className="mb-3">
                <label htmlFor="firstname">Nombre</label>
                <Field type="text" name="firstname" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname">Usuario</label>
                <Field type="text" name="username" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname">Contraseña</label>
                <Field type="text" name="password" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname">Email</label>
                <Field type="text" name="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname">Fecha de nacimiento</label>
                <Field type="text" name="fechaNacimiento" className="form-control" />
              </div>
              </div>

              <div className="columna">
              <div className="mb-3">
                <label htmlFor="firstname">Apellido</label>
                <Field type="text" name="lastname" className="form-control"/>
              </div>
              <div className="mb-3">
                <label htmlFor="firstname">Telefono</label>
                <Field type="text" name="telefono" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname">Repetir contraseña</label>
                <Field type="text" name="repeatPassword" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname">Direccion</label>
                <Field type="text" name="direccion" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname">Departamento</label>
                <Field type="text" name="departamento" className="form-control" />
              </div>
              </div>
              </div>
             
             <div id="contenedorBotonRegistrarse">
                <button type="submit" id="botonRegistrarse">
                  Enviar
                </button>
              </div> 
            </Form>
          )}
          
        </Formik>
        <Toaster/>
      </Modal.Body>
    </Modal>

  
  )
}

export default ModalIngreso