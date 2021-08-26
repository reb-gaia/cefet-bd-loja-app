import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useAddresses } from '../../hooks/contexts/AddressesProvider'

function Queries() {
  const { addresses, getAddresses } = useAddresses();

  // useEffect -> renderizar os produtos
  useEffect(() => {
    getAddresses();
    console.log("teste", addresses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container 
      title="Endereços" 
      size="lg"
    >
      <Styled.CardWrapper>
        {addresses.map(address => (
          <div key={address.id}>
            <h1>{address}</h1>
          </div>
          
        ))}
      </Styled.CardWrapper>
    </Container>
  )
}

export default Queries;