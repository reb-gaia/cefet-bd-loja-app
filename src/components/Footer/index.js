import React from "react";
import { Box, Container, Row, Column, Title, Paragraph, Text } from "./styles";

function Footer () {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Title>Contatos</Title>
            <Paragraph>(31) 3256-9856</Paragraph>
            <Paragraph>(31) 95892-9856</Paragraph>
          </Column>
          
          <Column>
            <Title>Email</Title>
            <Paragraph>clinica@medica.com</Paragraph>
          </Column>
          <Column>
            <Title>Endereço</Title>
            <Paragraph>Av. do Contorno, 9681 - 2º andar - Prado, Belo Horizonte - MG</Paragraph>
          </Column>
        </Row>
      </Container>
      <Text style={{paddingTop: "40px"}}>Todos os direitos reservados © - 2021</Text>
    </Box>
  );
};
export default Footer;
