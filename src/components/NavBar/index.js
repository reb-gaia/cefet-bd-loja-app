import React from 'react';
import { useAuth } from '../../hooks/contexts/AuthProvider'
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { Styled } from './styled';
import { Link } from 'react-router-dom';

function NavBar() {
  const { auth, SignOut } = useAuth();
  const history = useHistory();
  
  const handleClick = async () => {
    await SignOut();
    history.push("/login");
  }

  return (
    <Navbar style={{backgroundColor: '#ffd803', textColor: '#272343'}} variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" style={{textColor: '#272343'}}>Clínica Médica</Navbar.Brand>
        <Nav className="me-auto">
          <Styled.NavItem to="/galery">Galeria</Styled.NavItem>
          <Styled.NavItem to="/create-addresses">Endereços</Styled.NavItem>
          {auth && <Styled.NavItem to="/create-employee">Funcionários</Styled.NavItem>}
          {auth && <Styled.NavItem to="/create-patients">Pacientes</Styled.NavItem>}
          {auth && <Styled.NavItem to="/queries">Consultas</Styled.NavItem>}
          <Styled.NavItem to="/create-schedules">Agendamentos</Styled.NavItem>
        </Nav>
        <Nav className="d-flex">
          <Styled.NavItem onClick={handleClick} style={{marginTop: '8px'}}>
              Entrar
          </Styled.NavItem>
          {auth && <Styled.NavItem onClick={SignOut} style={{marginTop: '8px'}}>
              Sair
          </Styled.NavItem>}
          {" "}<Styled.NavIcon> {auth ? <FiLogOut onClick={SignOut}/> : <FiLogIn onClick={handleClick} /> }</Styled.NavIcon>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;