

import firebaseApp from "../../../Firebase/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);


const Register = () => {


    const firestore = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);


    const registerUser = async (fullName, email, password) => {
        console.log("registerUser", fullName, email, password);
        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((userCredential) => {
            /* console.log("userCredential", userCredential); */
            try {
                MySwal.fire({
                    title: `Wellcome ${fullName}!`,
                    text: "Your user was created successfully, enjoy our site!",
                    icon: "success",
                    confirmButtonText: "Ok",
                })
                return userCredential;

            } catch (error) {
                MySwal.fire({
                    title: "Error!",
                    text: "An error was ocurrió wachin!",
                    icon: "error",
                    confirmButtonText: "Ok",
                })
                /* no se por que no me toma la alerta 
                cuando hay error de a la hora de registrar */
            }


        })
        /* console.log("result", result);
        console.log("uid", result.user.uid); */

        const userRef = doc(firestore, `users/${result.user.uid}`);
        /* console.log("userRef", userRef); */

        setDoc(userRef, { email: email, name: fullName, password: password });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.fullname.value;

        /* console.log(name, email, password); */

        registerUser(name, email, password);

    };
    {/* Podría hacerse con un formulario controlado con
    handleChange para mejorar eficiencia creo, despues se agrega */}
    return (
        <div className='register-cont'>

            <form onSubmit={handleSubmit}>
                <label className="inp-cn-text">Full Name
                    <input
                        className="inp-txt"
                        type="text"
                        placeholder='John Doe'
                        id='fullname' />
                </label>
                <label className="inp-cn-text">
                    Email
                    <input
                        className="inp-txt"
                        type="email"
                        placeholder='john_doe@mail.com'
                        id='email' />
                </label>
                <label className="inp-cn-text">
                    Password
                    <input
                        className="inp-txt"
                        type="password"
                        placeholder='**********'
                        id='password' />
                </label>
                {/* <label className="label-title">
                    Role
                    <select id="role">
                        <option value="admin">Teacher</option>
                        <option value="user">Alumno</option>
                    </select>
                </label> */}
                <button className="subm-btn" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;