import { Route, Routes } from 'react-router-dom';

import '../../assets/stylesheets/principal_structure/Body.css'

import ArmarGrupos from '../active_components/ArmarGrupos';
import CargarEstudiante from '../active_components/CargarEstudiante';
import CargarHabilidades from '../active_components/CargarHabilidades';
import Home from '../active_components/Home';
import VerEstudiantes from '../active_components/VerEstudiantes';
import VerGrupos from '../active_components/VerGrupos';
const Body = () =>{
    return(
        <div className="body-cont">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cargar-estudiantes' element={<CargarEstudiante/>}/>
                <Route path='/cargar-habilidades' element={<CargarHabilidades/>}/>
                <Route path='/armar-grupos' element={<ArmarGrupos/>}/>
                <Route path='/ver-estudiantes' element={<VerEstudiantes/>}/>
                <Route path='/ver-grupos' element={<VerGrupos/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
            
        </div>
    )
}
export default Body;