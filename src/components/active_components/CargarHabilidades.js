import '../../assets/stylesheets/active_components/CargarHabilidades.css'
import { IoIosTrash } from "react-icons/io";
const CargarHabilidades = () =>{
    return(
        <div className="habilidades-cont">

            <form className="form-habilidades">
                <input className='input-habilidad' type="text" placeholder="Habilidad..." autoComplete="false"/>
                <a href="/"><button type='submit' className="bn632-hover bn19">Cargar</button></a>
            </form>

            <div className="habilidades-en-db">
                <div className="tit-hab">
                    Habilidades Cargadas
                </div>

                {/* ACÁ IRIA EL MAP QUE LEE DE LA DB LAS HABILIDADES CARGADAS */}
                <div className='habilidad'>
                    Manejo Backend
                    <div className='btn-delete'><IoIosTrash/></div>
                </div>

                <div className='habilidad'>
                    Manejo Backend
                    <div className='btn-delete'><IoIosTrash/></div>
                </div>

                <div className='habilidad'>
                    Manejo Backend
                    <div className='btn-delete'><IoIosTrash/></div>
                </div>

                <div className='habilidad'>
                    Manejo Backend
                    <div className='btn-delete'><IoIosTrash/></div>
                </div>
                
               
            </div>


        </div>
    )
}
export default CargarHabilidades;