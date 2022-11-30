import Footer from '../../components/Footer';
import { Styled } from './styles';
import React, { useEffect } from 'react';
import { useApps } from '../../hooks/contexts/AppsProvider'
import CardApps from '../../components/CardApps';
import { Button } from 'react-bootstrap';

function MeusApps() {
  const { apps, getApps } = useApps();
  
  useEffect(() => {
    getApps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Styled.Title>Meus aplicativos</Styled.Title>
        <div className="d-grid gap-2 d-md-flex justify-content-md-right" style={{marginBottom: "50px", justifyContent:"right", }}>
          <Button variant="primary" href="/criar-app">Novo Aplicativo</Button>{' '}
        </div>
        
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

export default MeusApps;