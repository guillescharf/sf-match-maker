import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import equipo from '../../assets/image/equipo.png'
import '../../assets/stylesheets/active_components/NavBar.css';

import firebaseApp from '../../Firebase/firebase';
import { getAuth, signOut } from "firebase/auth";
import { useUserContext } from '../context/userContext';
import Login from './login_components/Login';
import Register from './login_components/Register';
import { useState } from 'react';
function NavBar() {

    const auth = getAuth(firebaseApp);

    const { user } = useUserContext();
    const [logReg, setLogReg] = useState(true);

    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Link to="/">
                            <Navbar.Brand href="#">
                                <img src={equipo} alt="" className='logo' />
                                <span>SF Match Maker</span>
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                {/* <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item>
                                        <Link className='route' to='/armar-grupos'>Armar Grupos</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='route' to='/cargar-estudiantes'>Cargar Estudiantes</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='route' to='/armar-grupos'>Armar Grupos</Link>
                                    </NavDropdown.Item>                                                                        

                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown> */}

                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {
                                        user ?
                                            <>
                                                <div className='cont-loged'>
                                                    <p className='loged-email'>Loged at: <span className='sp-log'>{user.email}</span></p>
                                                    <button className='btn-log-out' onClick={() => signOut(auth)}>Log out</button>
                                                </div>
                                                <p className='tit-nav'>Profile</p>
                                                <p className='tit-nav'>My Groups</p>
                                                <p className='tit-nav'>Settings</p>
                                            </>
                                            :
                                            <>

                                                <div className='cont-login'>
                                                    <p className={`tit-nav ${logReg && 'tit-pressed'}`} onClick={() => setLogReg(true)}>Login</p>
                                                    {logReg &&
                                                        <Login />
                                                    }
                                                </div>


                                                <div className='cont-register'>
                                                    <p className={`tit-nav ${!logReg && 'tit-pressed'}`} onClick={() => setLogReg(false)}>Register</p>
                                                    {!logReg &&
                                                        <Register />
                                                    }
                                                </div>

                                            </>
                                    }


                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBar;
