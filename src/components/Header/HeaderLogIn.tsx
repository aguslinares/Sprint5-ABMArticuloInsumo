import { useNavigate } from 'react-router-dom';
import '../../styles/HeaderStyle.css';

const HeaderLogIn = () => {

    const navigate = useNavigate();

    function onLogOut() {

        window.localStorage.removeItem('isLoggedIn');
        navigate('/');
    }


    return (
<>
<header>
        <div className="header">
                
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoPNG.png" 
                    id="logoBSArriba" alt="logoBuenSabor"/>
                
            <div> 
                <div id="arriba">
                    
                        <button className="buttonA">Home</button> 
                    
                    
                        <button className="buttonA">Productos</button>
                    
                    
                        <button className="buttonA">Contactos</button>
                    
                </div>
            </div>
            <div className="barraBuscar">
                <input type="text" className="cajaBuscar" placeholder="Buscar..."/>
                
                    <button type="submit" className="botonLupa"><img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoLupa.jpg" 
                        alt="submit" className="imagenLupa"/></button>
                
            </div>
            <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuario
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                    <li><a className="dropdown-item" href="#">Mis Compras</a></li>
                    <li><a className="dropdown-item" onClick={onLogOut}>LogOut</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="lineaBordo"/>
</header>

</>

    )

} 

export default HeaderLogIn;