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
    <Navbar style={{backgroundColor: '#ffd803', textColor: '#272343'}} variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" style={{textColor: '#272343'}}>Clínica Médica</Navbar.Brand>
        <Nav className="me-auto">
          <Styled.NavItem to="/galery">Galeria</Styled.NavItem>
          <Styled.NavItem to="/create-address">Endereços</Styled.NavItem>
          {auth && <Styled.NavItem to="/create-employee">Funcionários</Styled.NavItem>}
          {auth && <Styled.NavItem to="/create-patient">Pacientes</Styled.NavItem>}
          <Styled.NavItem to="/create-schedule">Agendamentos</Styled.NavItem>
          {auth && <Styled.NavItem to="/queries">Consultas</Styled.NavItem>}
        </Nav>
        <Nav className="d-flex">
          {auth ? <Styled.NavItem onClick={SignOut} style={{marginTop: '8px'}}>
              Sair
          </Styled.NavItem> : <Styled.NavItem onClick={handleClick} style={{marginTop: '8px'}}>
              Entrar
          </Styled.NavItem>}
          {" "}<Styled.NavIcon> {auth ? <FiLogOut onClick={SignOut}/> : <FiLogIn onClick={handleClick} /> }</Styled.NavIcon>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;