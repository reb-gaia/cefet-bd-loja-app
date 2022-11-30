import Footer from '../../components/Footer';
import { Styled } from './styles';
import React, { useEffect } from 'react';
import { useApps } from '../../hooks/contexts/AppsProvider'
import CardApps from '../../components/CardApps';

function MinhasCompras() {
  const { apps, getApps } = useApps();
  
  useEffect(() => {
    getApps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Styled.Title>Minhas compras</Styled.Title>
        <div style={{margin: "50px"}}>
          <Styled.CardWrapper>
            {apps.map(app => (
              <CardApps
                key={app.id_app}
                app={app}>
              </CardApps>
            ))}
          </Styled.CardWrapper>
        </div>
      </Styled.Container>
      <Footer />
    </div>
  )
}

export default MinhasCompras;