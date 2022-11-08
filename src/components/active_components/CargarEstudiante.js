import '../../assets/stylesheets/active_components/CargarEstudiante.css'

const CargarEstudiante = () =>{
    return(
        <div className="estudiante-cont">
            <form className="form-estudiante">
                
                    <label htmlFor="nombre">Nombre</label>
                    <input className='est-text' type='text' name="nombre" placeholder='Nombre y Apellido'/>
                
                
                    <label htmlFor="email">Email</label>
                    <input className='est-text' type='text' name="email" placeholder='estudiante@matchmaker.com'/>
                
                <input className='btn-cargar' type='submit' value="Cargar"/>
            </form>
            <p className='texto-recordatorio'>
                Tambien se podría agregar que cuando se
                carga el estudiante se inicialice cons
                las habilidades que esten seteadas en bd
            </p>
        </div>
    )
}

export default CargarEstudiante;