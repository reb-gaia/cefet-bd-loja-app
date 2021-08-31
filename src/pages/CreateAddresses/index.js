import React, { useMemo, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useAddresses } from '../../hooks/contexts/AddressesProvider';
import { validationSchema } from './validation';
import Swal from 'sweetalert2';

function CreateAdresses() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()

  const { error, postAddresses, putAddresses } = useAddresses();
  const [cep, setCep] = useState({});

  function handleTextChange(e) {
    if(e.target.value.length > 7) {
      e.preventDefault();
      fetch(`https://viacep.com.br/ws/${e.target.value}/json`)
      .then(res => res.json())
      .then(res => setCep(res));
    }
  }
     
  useEffect(() => {
    console.log(state);
  });

  const formik = useFormik({  
    initialValues: {
      cep: state ? state.address.cep : "",
      street: state ? state.address.street : "",
      district: state ? state.address.district : "",
      city: state ? state.address.city : "",
      estado: state ? state.address.estado : "",
    },
    validationSchema,
    onSubmit: async values => {
      if(!!id) {
        await putAddresses({
          id,
          cep: values.cep,
          street: values.street,
          district: values.district,
          city: values.city,
          estado: values.estado,
        });
        history.push("/");
        return
      }
      await postAddresses(values);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Endereço cadastrado',
        showConfirmButton: false,
        timer: 1500
      })
      history.push("/");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  const ValidationCepError = useMemo(
    () => <Styled.Error>{formik.errors.cep}</Styled.Error>, [formik.errors.cep]
  );

  const ValidationStreetError = useMemo(
    () => <Styled.Error>{formik.errors.street}</Styled.Error>, [formik.errors.street]
  );

  const ValidationDistrictError = useMemo(
    () => <Styled.Error>{formik.errors.district}</Styled.Error>, [formik.errors.district]
  );

  const ValidationCityError = useMemo(
    () => <Styled.Error>{formik.errors.city}</Styled.Error>, [formik.errors.city]
  );

  const ValidationStateError = useMemo(
    () => <Styled.Error>{formik.errors.estado}</Styled.Error>, [formik.errors.estado]
  );

  return (
      <Container
        title="Cadastrar novo endereço"
        size="form"
      >
        <Form onSubmit={formik.handleSubmit} style={{paddingRight: '15px',overflowY: "scroll"}}>
          <Form.Group className="mb-2">
            <Styled.ProfileLabel>CEP</Styled.ProfileLabel>
            <Form.Control
              id="cep"
              name="cep"
              placeholder="Digite seu CEP"
              onChange={e => { formik.handleChange(e); handleTextChange(e); }}
              isValid={formik.touched.cep && !formik.errors.cep}
              isInvalid={formik.errors.cep}
            />
            {ValidationCepError}
          </Form.Group>
          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Logradouro</Styled.ProfileLabel>
            <Form.Control
              id="street"
              name="street"
              defaultValue={cep.logradouro}
              placeholder="Digite seu logradouro"
              onChange={formik.handleChange}            
              isValid={formik.touched.street && !formik.errors.street}
              isInvalid={formik.errors.street}
            />
            {ValidationStreetError}
          </Form.Group>
          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Bairro</Styled.ProfileLabel>
            <Form.Control
              id="district"
              name="district"
              defaultValue={cep.bairro}
              placeholder="Digite seu bairro"
              onChange={formik.handleChange}            
              isValid={formik.touched.district && !formik.errors.district}
              isInvalid={formik.errors.district}
            />
            {ValidationDistrictError}
          </Form.Group>

          <Row>
            <Col xs={7}>
              <Form.Group className="mb-2">
                <Styled.ProfileLabel>Cidade</Styled.ProfileLabel>
                <Form.Control
                  id="city"
                  name="city"
                  defaultValue={cep.localidade}
                  placeholder="Digite sua cidade"
                  onChange={formik.handleChange}            
                  isValid={formik.touched.city && !formik.errors.city}
                  isInvalid={formik.errors.city}
                />
                {ValidationCityError}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-2">
                <Styled.ProfileLabel>Estado</Styled.ProfileLabel>
                <Form.Control
                  id="estado"
                  name="estado"
                  defaultValue={cep.uf}
                  placeholder="Digite seu estado"
                  onChange={formik.handleChange}            
                  isValid={formik.touched.estado && !formik.errors.estado}
                  isInvalid={formik.errors.estado}
                />
                {ValidationStateError}
              </Form.Group>
            </Col>
          </Row>
          {AppError}
          <Button style={{backgroundColor: '#272343'}} variant="primary" type="submit">
            Cadastrar endereço
          </Button>
        </Form> 
      </Container>
  );
}

export default CreateAdresses;