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
          <Nav.Link href="/addresses">Endereços</Nav.Link>
          <Nav.Link href="/employee">Funcionários</Nav.Link>
          <Nav.Link href="/patients">Pacientes</Nav.Link>
          <Nav.Link href="/schedules">Agendamentos</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Styled.NavItem> {auth ? <FiLogOut onClick={SignOut}/> : <FiLogIn onClick={handleClick} /> }</Styled.NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;