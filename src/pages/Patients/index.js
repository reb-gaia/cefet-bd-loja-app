import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useProduct } from '../../hooks/contexts/ProductProvider'

function Patients() {

  const { products, getProduct } = useProduct();

  // useEffect -> renderizar os produtos
  useEffect(() => {
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container 
      title="Últimos Cadastros" 
      size="lg"
    >
      <Styled.CardWrapper>
        {products.map(product => (
          <CardItem 
            key={product.id}
            product={product}>
              
          </CardItem>
        ))}
      </Styled.CardWrapper>
    </Container>
  )
}

export default Patients;