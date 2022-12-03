import React from "react";
import { Box, Container, Row, Column, Title, Paragraph, Text } from "./styles";

function Footer () {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Title>Time</Title>
            <Paragraph>Eduardo Gomes</Paragraph>
            <Paragraph>Hugo Pina</Paragraph>
            <Paragraph>Pedro Vaz</Paragraph>
            <Paragraph>Rebeca Gaia</Paragraph>
          </Column>
          
          <Column>
            <Title>Fale conosco</Title>
            <Paragraph>aplicativos@store.com</Paragraph>
          </Column>

          <Column>
            <Title>Disciplina</Title>
            <Paragraph>Banco de Dados 1</Paragraph>
            <Paragraph>Laboratório de Banco de Dados 1</Paragraph>
          </Column>
        </Row>
      </Container>
      <Text style={{paddingTop: "40px"}}>Todos os direitos reservados © - 2022</Text>
    </Box>
  );
};
export default Footer;
