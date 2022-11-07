import { useState } from "react";
import firebaseApp from "../../firebase/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";


const Login = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    const firestore = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);

    const registerUser = async (email, password, role) => {
        // console.log("registerUser", email, password, role);
        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((userCredential) => {
            // console.log("userCredential", userCredential);
            return userCredential;
        });
        // console.log("result", result);
        // console.log("result.user.uid", result.user.uid);
        const userRef = doc(firestore, `users/${result.user.uid}`);
        // console.log("userRef", userRef);
        // setDoc(userRef, {email: email, role: role})
        setDoc(userRef, { email, role });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Submit");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const role = e.target.role.value;
        // console.log("email, password, role", email, password, role);

        if (isRegistered) {
            // Register
            registerUser(email, password, role);
        } else {
            // Login
            signInWithEmailAndPassword(auth, email, password);
        }
    };

    return (
        <div className='container'>
            <h2>{isRegistered ? "Registrate" : "Iniciá sesión"}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="email" placeholder='john_doe@mail.com' id='email' />
                </label>

                <label>
                    Password
                    <input type="password" placeholder='**********' id='password' />
                </label>

                <label className="label-title">
                    Role
                    <select id="role">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </label>
                <button type="submit">{isRegistered ? "Registrame" : "Iniciá mi sesión"}</button>
            </form>
            <button onClick={() => setIsRegistered(!isRegistered)}>
                {isRegistered
                    ? "¿Ya tenés cuenta? Iniciá sesión"
                    : "¿No tenés cuenta? Registrate"}
            </button>
        </div>
    )
}

export default Login;