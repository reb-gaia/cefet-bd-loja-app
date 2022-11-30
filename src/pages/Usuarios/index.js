import Footer from '../../components/Footer';
import { Styled } from './styles';
import React, { useEffect } from 'react';
import { useUsuarios } from '../../hooks/contexts/UsuariosProvider'
import CardUsuario from '../../components/CardUsuario';
import { Button } from 'react-bootstrap';

function Usuarios() {
  const { usuarios, getUsuarios } = useUsuarios();
  
  useEffect(() => {
    getUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Styled.Title>Usuários</Styled.Title>

        <div className="d-grid gap-2 d-md-flex justify-content-md-right" style={{marginBottom: "50px", justifyContent:"right", }}>
          <Button variant="primary" href="/criar-usuario">Novo Usuário</Button>{' '}
        </div>

        <div style={{margin: "50px"}}>
          <Styled.CardWrapper>
            {usuarios.map(usuario => (
              <CardUsuario
                key={usuario.id_usuario}
                usuario={usuario}>
              </CardUsuario>
            ))}
          </Styled.CardWrapper>
        </div>
      </Styled.Container>
      <Footer />
    </div>
  )
}

export default Usuarios;