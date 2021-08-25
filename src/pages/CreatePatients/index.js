import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button, Row, Col, FormControl } from 'react-bootstrap';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import Container from '../../components/Container';
import { Styled } from './styles';
import { usePatients } from '../../hooks/contexts/PatientsProvider';
import { validationSchema } from './validation';


function CreatePatients() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()
  const { error, postPatients, putPatients } = usePatients();
    
  useEffect(() => {
    console.log(state);
  });

  const formik = useFormik({
    initialValues: {
      name: state ? state.product.name : "",
      description: state ? state.product.description : "",
      price: state ? state.product.price : 0,
    },
    validationSchema,
    onSubmit: async values => {
      if(!!id) {
        await putPatients({
          id,
          name: values.name, 
          description: values.description, 
          price: values.price,
        });
        history.push("/home");
        return
      }
      await postPatients(values);
      history.push("/home");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  const ValidationNameError = useMemo(
    () => <Styled.Error>{formik.errors.name}</Styled.Error>, [formik.errors.name]
  );

  const ValidationEmailError = useMemo(
    () => <Styled.Error>{formik.errors.email}</Styled.Error>, [formik.errors.email]
    );
    
  const ValidationPasswordError = useMemo(
    () => <Styled.Error>{formik.errors.password}</Styled.Error>, [formik.errors.password]
  );

  const ValidationPhoneError = useMemo(
    () => <Styled.Error>{formik.errors.phone}</Styled.Error>, [formik.errors.phone]
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

  const ValidationWeightTypeError = useMemo(
    () => <Styled.Error>{formik.errors.weight}</Styled.Error>, [formik.errors.weight]
  );

  const ValidationHeightError = useMemo(
    () => <Styled.Error>{formik.errors.height}</Styled.Error>, [formik.errors.height]
  );

  const ValidationBloodTypeError = useMemo(
    () => <Styled.Error>{formik.errors.bloodType}</Styled.Error>, [formik.errors.bloodType]
  );

  return (
    <Container
      title="Cadastrar Paciente"
      size="sm"
    >
      <Form onSubmit={formik.handleSubmit} style={{overflowY: "scroll"}}>
        <Form.Group className="mb-2">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={formik.handleChange}
            isValid={formik.touched.name && !formik.errors.name}
            isInvalid={formik.errors.name}
          />
          {ValidationNameError}
        </Form.Group>

        <Row>
          <Col xs={7}>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                placeholder="Digite seu email"
                onChange={formik.handleChange}            
                isValid={formik.touched.email && !formik.errors.email}
                isInvalid={formik.errors.email}
              />
              {ValidationEmailError}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-2">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                id="phone"
                name="phone"
                placeholder="Digite seu telefone"
                onChange={formik.handleChange}            
                isValid={formik.touched.phone && !formik.errors.phone}
                isInvalid={formik.errors.phone}
              />
              {ValidationPhoneError}
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-2">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            id="cep"
            name="cep"
            placeholder="Coloque o CEP"
            onChange={formik.handleChange}
            isValid={formik.touched.cep && !formik.errors.cep}
            isInvalid={formik.errors.cep}
          />
          {ValidationCepError}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control
            id="street"
            name="street"
            placeholder="Coloque o logradouro"
            onChange={formik.handleChange}            
            isValid={formik.touched.street && !formik.errors.street}
            isInvalid={formik.errors.street}
          />
          {ValidationStreetError}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Bairro</Form.Label>
          <Form.Control
            id="district"
            name="district"
            placeholder="Coloque o bairro"
            onChange={formik.handleChange}            
            isValid={formik.touched.district && !formik.errors.district}
            isInvalid={formik.errors.district}
          />
          {ValidationDistrictError}
        </Form.Group>

        <Row>
          <Col xs={7}>
            <Form.Group className="mb-2">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                id="city"
                name="city"
                placeholder="Coloque a cidade"
                onChange={formik.handleChange}            
                isValid={formik.touched.city && !formik.errors.city}
                isInvalid={formik.errors.city}
              />
              {ValidationCityError}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-2">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                id="estado"
                name="estado"
                placeholder="Coloque o estado"
                onChange={formik.handleChange}            
                isValid={formik.touched.estado && !formik.errors.estado}
                isInvalid={formik.errors.estado}
              />
              {ValidationStateError}
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Especialidade</Styled.ProfileLabel>
          <Styled.ProfileSelect
            id="doctorType"
            name="doctorType"
            onChange={formik.handleChange}            
            isValid={formik.touched.doctorType && !formik.errors.doctorType}
            isInvalid={formik.errors.doctorType}>
              <Styled.ProfileOption>Selecione a especialidade</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Clínico Geral</Styled.ProfileOption>
              <Styled.ProfileOption value="female">Ortopedista</Styled.ProfileOption>
              <Styled.ProfileOption value="others">Oftamologista</Styled.ProfileOption>
          </Styled.ProfileSelect>
          {ValidationWeightTypeError}
        </Form.Group>

        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Médico</Styled.ProfileLabel>
          <Styled.ProfileSelect
            id="doctor"
            name="doctor"
            onChange={formik.handleChange}            
            isValid={formik.touched.doctor && !formik.errors.doctor}
            isInvalid={formik.errors.doctor}>
              <Styled.ProfileOption>Selecione o médico</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Teste 1</Styled.ProfileOption>
              <Styled.ProfileOption value="female">Teste 2</Styled.ProfileOption>
          </Styled.ProfileSelect>
          {ValidationHeightError}
        </Form.Group>
        
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Form.Label>Data de inicio</Form.Label>
              <FormControl
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}            
                isValid={formik.touched.date && !formik.errors.date}
                isInvalid={formik.errors.date} />
              {ValidationBloodTypeError}
            </Form.Group>
          </Col>
          
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Sua senha"
            onChange={formik.handleChange}
            isValid={formik.touched.password && !formik.errors.password}
            isInvalid={formik.errors.password}
          />
          {ValidationPasswordError}
        </Form.Group>
      
        {AppError}
        <Button variant="primary" type="submit">
          Cadastrar paciente
        </Button>
      </Form> 
    </Container>
  );
}

export default CreatePatients;