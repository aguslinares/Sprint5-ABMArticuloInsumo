import { useNavigate } from 'react-router-dom';
import '../../styles/HeaderStyle.css';
import BotonIngresar from "../ModalLogInRegister/BotonIngresar";

const Header = () => {

const navigate = useNavigate();


    return (

        
<>
<header>
        <div className="header">
                
                    <img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoPNG.png" 
                    id="logoBSArriba" alt="logoBuenSabor"/>
                
            <div> 
                <div id="arriba">
                    
                        <button className="buttonA" onClick={() => navigate('/')}>Home</button> 
                    
                    
                        <button className="buttonA">Productos</button>
                    
                    
                        <button className="buttonA">Contactos</button>
                        <button onClick={()=> navigate ('/administracion')} className="buttonA"  >Administracion</button>
                    
                </div>
            </div>
            <div className="barraBuscar">
                <input type="text" className="cajaBuscar" placeholder="Buscar..."/>
                
                    <button type="submit" className="botonLupa"><img src="https://raw.githubusercontent.com/Facustriker/El-buen-sabor---Grupo-Front-eo/main/Assets/logoLupa.jpg" 
                        alt="submit" className="imagenLupa"/></button>
                
            </div>
            <div><BotonIngresar/></div>
        </div>
        <div className="lineaBordo"/>
</header>
    
   
</>

    )

} 

export default Header;