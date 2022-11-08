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

    useEffect(() => {//para traer las habilidades de firebase cada vez que se renderize el comonente
        getHabilidades();
    }, [])
    console.log("skills",skills);
    return (
        <div className="estudiante-cont">
            <form className="form-estudiante">

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
                    {
                        habilidades?.map((habilidad) => {
                            return (
                                <label key={habilidad.id_db}>
                                    <input
                                        type='checkbox'
                                        name="skills[]"
                                        value={habilidad.habilidad}
                                        onChange={(e) => setSkills({checked: e.target.checked, value: e.target.value})}
                                    />
                                    {habilidad.habilidad}
                                </label>
                            )
                        })
                    }

                </div>

                <a href="/"><button type='submit' className="bn632-hover bn19">Cargar</button></a>
            </form>

        </div>
    )
}

export default CargarEstudiante;