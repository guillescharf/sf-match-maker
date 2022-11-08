import '../../assets/stylesheets/active_components/CargarHabilidades.css'
import { IoIosTrash } from "react-icons/io";

import { db } from '../../Firebase/firebase'
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';

import { useState, useEffect } from 'react';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CargarHabilidades = () => {

    const [habilidades, setHabilidades] = useState([]);//Hook para renderizar las habilidades en la DB
    const [habilidad, setHabilidad] = useState("");//Hook para cargar una habilidad
    const habilidadesCollection = collection(db, "habilidades");

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

    const addHabilidad = async (e) => {
        e.preventDefault();
        try {
            await addDoc(habilidadesCollection, { habilidad, });//esta hecho con notacion ECMAS6 SINO SERÍA { habilidad: habilidad }
            MySwal.fire({
                title: "Habilidad agregada!",
                text: "Se enriquece el grupo :)",
                icon: "success",
                confirmButtonText: "Ok",
            });
            getHabilidades();
        } catch (error) {
            MySwal.fire({
                title: "Error!",
                text: "La habilidad no se pudo crear!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    }

    const confirmDeleteHabilidad = (id) => {//Funcion para usar sweet alert con boton de cancelar y de aceptar
        MySwal.fire({
            title: 'Estas seguro que queres borrar esta habilidad?',
            text: "Esta acción no tiene marcha atras!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteHabilidad(id); //se invoca esta funcion para eliminar la habilidad si el resultado de la promesa es confirmado
                MySwal.fire({
                    title: "Deleted!",
                    text: "La habilidad ha sido borrada de Firebase!",
                    icon: "success",
                    confirmButtonText: "Ok",
                })
            }
        })
    }

    const deleteHabilidad = async (id) => { //funcion para eliminar una habilidad con metodo de firebase
        const habilidadToDelete = doc(db, "habilidades", id);
        try {
            await deleteDoc(habilidadToDelete);
        } catch (error) {
            MySwal.fire({
                title: "Error!",
                text: "Ha ocurrido un error!",
                icon: "error",
                confirmButtonText: "Ok",
            })
        }
        getHabilidades();
    }

    useEffect(() => {//para traer las habilidades de firebase cada vez que se renderize el comonente
        getHabilidades();
    }, [])

    return (
        <div className="habilidades-cont">

            <form className="form-habilidades" onSubmit={addHabilidad}>
                <input
                    className='input-habilidad'
                    type="text"
                    name="habilidad"
                    value={habilidad}
                    placeholder="Habilidad..."
                    autoComplete="false"
                    onChange={(e) => setHabilidad(e.target.value)}
                />
                <input className='input-cargar' type="submit" value="Cargar" />
            </form>

            <div className="habilidades-en-db">
                <div className="tit-hab">
                    Habilidades Cargadas
                </div>

                {
                    habilidades?.map((habilidad) => {
                        return (
                            <div className='habilidad' key={habilidad.id_db}>
                                {habilidad.habilidad}
                                <div className='btn-delete' onClick={() => confirmDeleteHabilidad(habilidad.id_db)}>
                                    <IoIosTrash />
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}
export default CargarHabilidades;