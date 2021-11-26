import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg p-3" variant="dark">
            <Container className="text-center">
                <Navbar.Brand as={Link} to="/home"><h2>Retina Eye</h2> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="text-white text-uppercase font-size" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="text-white text-uppercase font-size" as={Link} to="/service">Services</Nav.Link>
                    <Nav.Link className="text-white text-uppercase font-size " as={Link} to="/about">About</Nav.Link>
                    <Nav.Link className="text-white text-uppercase font-size " as={Link} to="/appointment">Appointment</Nav.Link>

                    {user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> : <button className="btn"><Nav.Link variant="light" className="btn btn-light text-dark" as={Link} to="/login">Login</Nav.Link></button>
                    }
                    <Navbar.Text>
                        <Link className="user" to="/">{user.displayName}</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;