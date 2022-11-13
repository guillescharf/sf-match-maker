import '../../assets/stylesheets/active_components/Home.css'
import CarouselBootstrap from '../decorative_components/CarouselBootstrap';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
const Home = () => {
    const { user } = useUserContext();
    return (
        <div className="home-cont">

            <div className='carousel-cont'>
                <CarouselBootstrap />
            </div>

            <div className='buttons-cont'>
                {user && <>
                    <Link to='/cargar-estudiantes'><button className="btn-home">Cargar Estudiante</button></Link>
                    <Link to='/cargar-habilidades'><button className="btn-home">Cargar Habilidades</button></Link>
                    <Link to='/armar-grupos'><button className="btn-home">Armar Grupos</button></Link>
                </>}
                
                {!user && <div className='alert-nolog'>
                    Read Mode Only, Log in to edit.
                </div>}

                <Link to='/ver-estudiantes'><button className="btn-home">Ver Estudiantes</button></Link>
                <Link to='/ver-grupos'><button className="btn-home">Ver Grupos</button></Link>
            </div>
        </div>

    )
}

export default Home;