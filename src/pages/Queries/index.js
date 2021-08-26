import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useAddresses } from '../../hooks/contexts/AddressesProvider'
import CardItem from '../../components/CardItem';

function Queries() {
  const { addresses, getAddresses } = useAddresses();

  // useEffect -> renderizar os produtos
  useEffect(() => {
    getAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container 
      title="Endereços" 
      size="form"
    >
      <Styled.CardWrapper>
        {addresses.map(address => (
          <CardItem
            key={address.id}
            address={address}>
              
          </CardItem>
        ))}
      </Styled.CardWrapper>
    </Container>
  )
}

export default Queries;