import Footer from '../../components/Footer';
import { Styled } from './styles';
import React, { useEffect } from 'react';
import { useApps } from '../../hooks/contexts/AppsProvider'
import CardAppsCompra from '../../components/CardAppsCompra';

function Home() {
  const { apps, getApps } = useApps();
  let aplicativos;
  
  useEffect(() => {
    getApps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Styled.Box>
          <Styled.Title>Loja de Aplicativos</Styled.Title>
          <Styled.Description>Compre aqui o seu novo aplicativo</Styled.Description>
        </Styled.Box>

        <div style={{margin: "100px"}}>
          <Styled.CardWrapper>
            {apps.apps && apps.apps.map(app => (
              <CardAppsCompra
                key={app.id}
                app={app}>
              </CardAppsCompra>
            ))}
          </Styled.CardWrapper>
        </div>
      </Styled.Container>
      <Footer />
    </div>
  )
}

export default Home;