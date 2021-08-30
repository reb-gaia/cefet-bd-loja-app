import React from 'react';
import { useAuth } from '../../hooks/contexts/AuthProvider'
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { Styled } from './styled';

function NavBar() {
  const { auth, SignOut } = useAuth();
  const history = useHistory();
  
  const handleClick = async () => {
    await SignOut();
    history.push("/login");
  }

  return (
    <Navbar style={{backgroundColor: '#ffd803'}} variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Clínica Médica</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/galery">Galeria</Nav.Link>
          <Nav.Link href="/create-addresses">Endereços</Nav.Link>
          {auth && <Nav.Link href="/create-employee">Funcionários</Nav.Link>}
          {auth && <Nav.Link href="/create-patients">Pacientes</Nav.Link>}
          <Nav.Link href="/create-schedules">Agendamentos</Nav.Link>
          {auth && <Nav.Link href="/queries">Consultas</Nav.Link>}
        </Nav>
        <Nav className="d-flex">
          <Styled.NavItem> {auth ? <FiLogOut onClick={SignOut}/> : <FiLogIn onClick={handleClick} /> }</Styled.NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;