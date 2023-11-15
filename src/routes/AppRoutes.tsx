  import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HomePageLogIn from '../pages/HomePageLogIn';
import Administacion from '../pages/Administrador';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        {<Route path="/homePageLogged" element={<HomePageLogIn/>}/>}
        {<Route path="/login" element={<HomePage/>}/>}
        {<Route path="/administracion" element={<Administacion/>}/>}
    </Routes>
  )
}

export default AppRoutes