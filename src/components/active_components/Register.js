import React from 'react'

const Register = () => {
    return (
        <div className='container'>
            <h2>Register</h2>
            <form >
                <label>Full Name
                    <input type="text" placeholder='John Doe' id='fullname'/>
                </label>
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
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;