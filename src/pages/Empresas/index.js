import Footer from '../../components/Footer';
import { Styled } from './styles';
import React, { useEffect } from 'react';
import { useEmpresas } from '../../hooks/contexts/EmpresasProvider'
import CardEmpresa from '../../components/CardEmpresa';
import { Button } from 'react-bootstrap';

function Empresas() {
  const { empresas, getEmpresas } = useEmpresas();
  
  useEffect(() => {
    getEmpresas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Styled.Title>Empresas</Styled.Title>
        <div className="d-grid gap-2 d-md-flex justify-content-md-right" style={{marginBottom: "50px", justifyContent:"right", }}>
          <Button variant="primary" href="/criar-empresa">Nova Empresa</Button>{' '}
        </div>

        <div style={{margin: "50px"}}>
          <Styled.CardWrapper>
            {empresas && empresas.map(empresa => (
              <CardEmpresa
                key={empresa.id}
                empresa={empresa}>
              </CardEmpresa>
            ))}
          </Styled.CardWrapper>
        </div>
      </Styled.Container>
      <Footer />
    </div>
  )
}

export default Empresas;