import '../../assets/stylesheets/active_components/CargarEstudiante.css'

import { db } from '../../Firebase/firebase'
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';

import { useState, useEffect } from 'react';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CargarEstudiante = () => {
    const [habilidades, setHabilidades] = useState([]);

    const [nombre, setNombre] = useState([]);
    const [email, setEmail] = useState([]);
    const [skills, setSkills] = useState([]);

    const habilidadesCollection = collection(db, "habilidades");
    const estudiantesCollection = collection(db, "estudiantes");

    const getHabilidades = async () => {//funcion para setear habilidades en el hook habilidades con la info de firebase
        const dataHabilidades = await getDocs(habilidadesCollection);

        setHabilidades(
            dataHabilidades.docs.map((doc) => {
                return (
                    { ...doc.data(), id_db: doc.id }
                )
            })
        )
    }

    const addEstudiante = async (e) => {
        e.preventDefault();
        try {
            await addDoc(estudiantesCollection,
                {
                    nombre,
                    email,
                    skills,
                });

            MySwal.fire({
                title: "Estudiante cargado correctamente!",
                text: "El grupete se agranda ;)",
                icon: "success",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            MySwal.fire({
                title: "Error!",
                text: "El estudiante no se pudo crear!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    }
   /*  const handleChange = (e) => {
        
        setSkills({
            ...skills,
            [e.target.name]: [e.target.value, e.target.checked],

        })


    } */

    const handleChange = (e) => {
        let newList = [];
        if(e.target.checked){
            newList = [...skills, e.target.value];
        }else{
            newList = skills.filter((item) => item !== e.target.value);
        }
        setSkills(newList)
    }

    useEffect(() => {//para traer las habilidades de firebase cada vez que se renderize el comonente
        getHabilidades();
    }, [])


    /* console.log(Object.keys(skills)); */
    console.log(skills, nombre, email);
    return (
        <div className="estudiante-cont">
            <form className="form-estudiante" onSubmit={addEstudiante}>

                <label htmlFor="nombre">Nombre</label>
                <input
                    className='est-text'
                    type='text'
                    name='nombre'
                    value={nombre}
                    placeholder='Nombre y Apellido'
                    onChange={(e) => setNombre(e.target.value)}
                />


                <label htmlFor="email">Email</label>
                <input
                    className='est-text'
                    type='text'
                    name='email'
                    value={email}
                    placeholder='estudiante@matchmaker.com'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className='check-habilidades'>
                    <p className='ini-hab'>Inicialice las habilidades</p>
                    {
                        habilidades?.map((habilidad) => {
                            return (
                                <label key={habilidad.id_db}>
                                    <input
                                        type='checkbox'
                                        name={habilidad.habilidad.replace(/ /g, '').toLowerCase()}
                                        value={habilidad.habilidad}
                                        onChange={handleChange}
                                    />
                                    {habilidad.habilidad}
                                </label>

                            )
                        })
                    }

                </div>

                <a href="/"><button type='submit' className="btn-cargar">Cargar</button></a>
            </form>

        </div>
    )
}

export default CargarEstudiante;