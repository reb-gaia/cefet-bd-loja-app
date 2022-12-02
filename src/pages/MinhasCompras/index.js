import Footer from '../../components/Footer';
import { Styled } from './styles';
import React, { useEffect } from 'react';
import { useCompras } from '../../hooks/contexts/ComprasProvider'
import CardCompra from '../../components/CardCompra';

function MinhasCompras() {
  const { compras, getComprasUser } = useCompras();
  
  useEffect(() => {
    getComprasUser(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Styled.Title>Minhas compras</Styled.Title>
        <div style={{margin: "50px"}}>
          <Styled.CardWrapper>
            {compras.purchases && compras.purchases.map(compra => (
              <CardCompra
                key={compra.id}
                compra={compra}>
              </CardCompra>
            ))}
          </Styled.CardWrapper>
        </div>
      </Styled.Container>
      <Footer />
    </div>
  )
}

export default MinhasCompras;