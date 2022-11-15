import { useUserContext } from '../../context/userContext';

import { db } from '../../../Firebase/firebase';
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';

import { useState, useEffect } from 'react';


const Profile = () => {
    const { user } = useUserContext();
    const [profiles, setProfiles] = useState([]);
    const profilesCollection = collection(db, `users`);

    const getProfiles = async () => {//funcion para setear habilidades en el hook habilidades con la info de firebase
        const dataProfiles = await getDocs(profilesCollection);

        setProfiles(
            dataProfiles.docs.map((doc) => {
                return (
                    { ...doc.data(), id: doc.id }
                )
            })
        )
    }

    useEffect(() => {
        getProfiles();
    }, [])

    /* HAY METODOS DE FIREBASE PARA ACCEDER MAS FACIL A LOS DATOS DEL USUARIO PERO 
    NO LO LOGRO ENCONTRAR BIEN, NO SE COMO USARLOS TODAVIA */
    return (
        <div className="prof-container">
            {
                profiles.map((profile) => {
                    return (
                        profile.id == user.uid ?
                            <div>
                                <p className='p-profile'><span className='sp-profile'>Nombre:</span> {profile.name}</p>
                                <p className='p-profile'><span className='sp-profile'>Email:</span> {profile.email}</p>
                                <p className='p-profile'><span className='sp-profile'>Contraseña:</span> {profile.password}</p>
                            </div>
                            :
                            ""
                    )

                })
            }
        </div>
    )
}

export default Profile;