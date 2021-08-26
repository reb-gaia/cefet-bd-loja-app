import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
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
      name: state ? state.patient.name : "",
      phone: state ? state.patient.phone : "",
      email: state ? state.patient.email : "",
      cep: state ? state.patient.cep : "",
      street: state ? state.patient.street : "",
      district: state ? state.patient.district : "",
      city: state ? state.patient.city : "",
      estado: state ? state.patient.estado : "",
      weight: state ? state.patient.weight : "",
      height: state ? state.patient.height : "",
      bloodType: state ? state.patient.bloodType : "",
    },
    validationSchema,
    onSubmit: async values => {
      if(!!id) {
        await putPatients({
          id,
          name: values.name, 
          phone: values.phone,
          email: values.email, 
          cep: values.cep,
          street: values.street,
          district: values.district,
          city: values.city,
          estado: values.estado,
          weight: values.weight,
          height: values.height,
          bloodType: values.bloodType,
        });
        history.push("/");
        return
      }
      await postPatients(values);
      history.push("/");
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
      size="form"
    >
      <Form onSubmit={formik.handleSubmit} style={{overflowY: "scroll"}}>
        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Nome</Styled.ProfileLabel>
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
              <Styled.ProfileLabel>Email</Styled.ProfileLabel>
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
              <Styled.ProfileLabel>Telefone</Styled.ProfileLabel>
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
          <Styled.ProfileLabel>CEP</Styled.ProfileLabel>
          <Form.Control
            id="cep"
            name="cep"
            placeholder="Digite seu CEP"
            onChange={formik.handleChange}
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
                placeholder="Digite seu estado"
                onChange={formik.handleChange}            
                isValid={formik.touched.estado && !formik.errors.estado}
                isInvalid={formik.errors.estado}
              />
              {ValidationStateError}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <Form.Group className="mb-2">
              <Styled.ProfileLabel>Peso</Styled.ProfileLabel>
              <Form.Control
                id="weight"
                name="weight"
                placeholder="Digite seu peso"
                onChange={formik.handleChange}            
                isValid={formik.touched.weight && !formik.errors.weight}
                isInvalid={formik.errors.weight}/>
              {ValidationWeightTypeError}
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group className="mb-2">
            <Styled.ProfileLabel>Altura</Styled.ProfileLabel>
              <Form.Control
                id="height"
                name="height"
                placeholder="Digite sua altura"
                onChange={formik.handleChange}            
                isValid={formik.touched.height && !formik.errors.height}
                isInvalid={formik.errors.height}/>
              {ValidationHeightError}
            </Form.Group>
          </Col>

          <Col xs={4}>
            <Form.Group className="mb-2">
            <Styled.ProfileLabel>Tipo Sanguíneo</Styled.ProfileLabel>
            <Styled.ProfileSelect
              id="bloodType"
              name="bloodType"
              onChange={formik.handleChange}            
              isValid={formik.touched.bloodType && !formik.errors.bloodType}
              isInvalid={formik.errors.bloodType}>
                <Styled.ProfileOption>Selecione seu tipo sanguíneo</Styled.ProfileOption>
                <Styled.ProfileOption value="A+">A+</Styled.ProfileOption>
                <Styled.ProfileOption value="A-">A-</Styled.ProfileOption>
                <Styled.ProfileOption value="B+">B+</Styled.ProfileOption>
                <Styled.ProfileOption value="B-">B-</Styled.ProfileOption>
                <Styled.ProfileOption value="AB+">AB+</Styled.ProfileOption>
                <Styled.ProfileOption value="AB-">AB-</Styled.ProfileOption>
                <Styled.ProfileOption value="O+">O+</Styled.ProfileOption>
                <Styled.ProfileOption value="O-">O-</Styled.ProfileOption>
            </Styled.ProfileSelect>
              {ValidationBloodTypeError}
            </Form.Group>
          </Col>
          
        </Row>
      
        {AppError}
        <Button variant="primary" type="submit">
          Cadastrar paciente
        </Button>
      </Form> 
    </Container>
  );
}

export default CreatePatients;