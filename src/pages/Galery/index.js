import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../../components/Footer';
import { Styled } from './styles';
import "./style.css";

function Galery() {
  
  return (
    <div style={{overflowY: "scroll"}}>
      <Styled.Container>
        <Carousel style={{width: '700px', height: '600px'}}>
          <Carousel.Item>
            <img
              /* style={{width: '50px'}} */
              src="https://blog.imedicina.com.br/wp-content/uploads/2017/09/iStock-1136865476.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.revistahabitare.com.br/geral/uploads/2019/04/abertura.Consult%C3%B3rio-m%C3%A9dico-%C3%A9-inovado-ap%C3%B3s-reforma-.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://blog.iclinic.com.br/wp-content/uploads/2021/04/digitalizar-clinica-medica.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Styled.Container>
      <Footer />
    </div>
  )
}

export default Galery;