import { useState } from "react";
import { ModalType } from "../../types/ModalType";
import { Button } from "react-bootstrap";
import ModalLogIn from "./ModalLogIn";
import { ClientLogin } from "../../types/ClientLogin";

const BotonLogin = () => {
  const initializableNewClient = (): ClientLogin => {
    return {
      email: "",
      contrasena: ""
    };
  };

  const [cliente, setCliente] = useState<ClientLogin>(initializableNewClient);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);

  const handleClick = (cliente: ClientLogin, modal: ModalType) => {
    setCliente(cliente);
    setModalType(modal);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        onClick={() => handleClick(initializableNewClient(), ModalType.CREATE)}
        className="botonParteSuperiorFormulario">
        Ingresar
      </Button>

      {showModal && (
        <ModalLogIn
          show={showModal}
          onHide={handleModalClose}
          modalType={modalType}
          cliente={cliente}
        />
      )}
    </>
  );
};

export default BotonLogin;
