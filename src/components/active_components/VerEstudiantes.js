import '../../assets/stylesheets/active_components/VerEstudiantes.css';
import { IoIosTrash } from "react-icons/io";

import { db } from '../../Firebase/firebase'
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';

import { useState, useEffect } from 'react';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const VerEstudiantes = () => {

    const [estudiantes, setEstudiantes] = useState([]);

    const estudiantesCollection = collection(db, "estudiantes");

    const getEstudiantes = async () => {//funcion para setear estudiantes en el hook estudiantes con la info de firebase
        const dataEstudiantes = await getDocs(estudiantesCollection);

        setEstudiantes(
            dataEstudiantes.docs.map((doc) => {
                return (
                    { ...doc.data(), id_db: doc.id }
                )
            })
        )
    }

    const confirmDeleteEstudiante = (id, nombre) => {//Funcion para usar sweet alert con boton de cancelar y de aceptar
        MySwal.fire({
            title: `Estas seguro qu quieres borrar a ${nombre}?`,
            text: "Esta acción no tiene marcha atras!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteEstudiante(id); //se invoca esta funcion para eliminar la habilidad si el resultado de la promesa es confirmado
                MySwal.fire({
                    title: "Deleted!",
                    text: "La habilidad ha sido borrada de Firebase!",
                    icon: "success",
                    confirmButtonText: "Ok",
                })
            }
        })
    }

    const deleteEstudiante = async (id) => { //funcion para eliminar un estudiante con metodo de firebase
        const estudianteToDelete = doc(db, "estudiantes", id);
        try {
            await deleteDoc(estudianteToDelete);
        } catch (error) {
            MySwal.fire({
                title: "Error!",
                text: "Ha ocurrido un error!",
                icon: "error",
                confirmButtonText: "Ok",
            })
        }
        getEstudiantes();
    }

    useEffect(() => {
        getEstudiantes();
    }, [])

    return (
        <div className="estudiantes-cont">
            <p>Curso: Skill Factory 2da Edicion</p>
            <div className='estudiantes-div'>
                {
                    estudiantes?.map((estudiante) => { //Un map adentro del otro, primero mapeo los estudiantes, luego mapeo las keys del objeto skill porque son dinamicas
                        return (
                            <div className='card-estudiante' key={estudiante.id_db}>
                                <div className='estudiante'>
                                    {estudiante.nombre}
                                    <div className='btn-delete-2'>
                                        <IoIosTrash onClick={() => confirmDeleteEstudiante(estudiante.id_db, estudiante.nombre)} />
                                    </div>
                                </div>

                                <div className='skills'>
                                    <p>{estudiante.skills.length != 0 ?
                                        <div>
                                            {estudiante.skills.map((skill) => {
                                                return (
                                                    <div className='skill-listada'>{skill}</div>
                                                )
                                            })}
                                        </div>
                                        :
                                        <div className='no-skill'>Estudiante en aprendizaje, sin skills</div>}</p>

                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}
export default VerEstudiantes;