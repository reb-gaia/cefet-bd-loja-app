import Footer from '../../components/Footer';
import { Styled } from './styles';
import React, { useEffect } from 'react';
import { useAvaliacoes } from '../../hooks/contexts/AvaliacoesProvider'
import CardAvaliacao from '../../components/CardAvaliacao';
import { Button } from 'react-bootstrap';

function MinhasAvaliacoes() {
  const { avaliacoes, getAvaliacoes } = useAvaliacoes();
  
  useEffect(() => {
    getAvaliacoes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Styled.Title>Avaliações</Styled.Title>
        <div className="d-grid gap-2 d-md-flex justify-content-md-right" style={{marginBottom: "50px", justifyContent:"right", }}>
          <Button variant="primary" href="/criar-avaliacao">Nova Avaliação</Button>{' '}
        </div>


        <div style={{margin: "50px"}}>
          <Styled.CardWrapper>
            {avaliacoes.map(avaliacao => (
              <CardAvaliacao
                key={avaliacao.id_usuario}
                avaliacao={avaliacao}>
              </CardAvaliacao>
            ))}
          </Styled.CardWrapper>
        </div>
      </Styled.Container>
      <Footer />
    </div>
  )
}

export default MinhasAvaliacoes;