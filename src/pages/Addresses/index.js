import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useAddresses } from '../../hooks/contexts/AddressesProvider'

function Addresses() {

  const { addresses, getAddresses } = useAddresses();

  // useEffect -> renderizar os produtos
  useEffect(() => {
    getAddresses()
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
            <h1>{address.cep}</h1>
          </div>
          
        ))}
      </Styled.CardWrapper>
    </Container>
  )
}

export default Addresses;