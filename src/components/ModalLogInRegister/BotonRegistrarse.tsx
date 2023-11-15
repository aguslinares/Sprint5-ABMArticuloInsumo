import { useState } from "react";
import { Client } from "../../types/Client";
import { ModalType } from "../../types/ModalType";
import { Button } from "react-bootstrap";
import ModalIngreso from "./ModalIngreso";

const BotonRegistrarse = () => {
  const initializableNewClient = (): Client => {
    return {
      nombre: "",
      apellido: "",
      usuario: "",
      telefono: 0,
      contrasena: "",
      repetirContrasena: "",
      email: "",
      direccion: "",
      departamento: "",
      fechaNacimiento: "",
    };
  };

  const [cliente, setCliente] = useState<Client>(initializableNewClient);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);

  const handleClick = (cliente: Client, modal: ModalType) => {
    setCliente(cliente);
    setModalType(modal);
    setShowModal(true);
  };

  const handleModalClose = () => {
    console.log(cliente);
    console.log(modalType);
    setShowModal(false);
  };

  return (
    <>
      <Button
        onClick={() => {handleClick(initializableNewClient(), ModalType.CREATE)}}
        className="botonParteSuperiorFormulario">
        Registrarse
      </Button>

      {showModal && (
        <ModalIngreso
          show={showModal}
          onHide={handleModalClose}
        />
      )}
    </>
  );
};

export default BotonRegistrarse;
