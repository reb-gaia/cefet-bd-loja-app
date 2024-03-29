import React from 'react';
import { useAuth } from '../../hooks/contexts/AuthProvider'
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { Styled } from './styled';
import { MultiSelect } from "react-multi-select-component";

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
        <Navbar.Brand href="/" style={{textColor: '#272343'}}>Loja de Aplicativos</Navbar.Brand>
        <Nav className="me-auto">
          <Styled.NavItem to="/minhas-compras">Minhas compras</Styled.NavItem>
          <Styled.NavItem to="/minhas-avaliacoes">Minhas avaliações</Styled.NavItem>
          <Styled.NavItem to="/meus-aplicativos">Meus aplicativos</Styled.NavItem>
          <Styled.NavItem to="/usuarios">Usuários</Styled.NavItem>
          <Styled.NavItem to="/empresas">Empresas</Styled.NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;