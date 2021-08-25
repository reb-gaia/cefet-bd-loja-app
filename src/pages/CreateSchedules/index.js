import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useSchedule } from '../../hooks/contexts/ScheduleProvider';
import { validationSchema } from './validation';


function CreateSchedules() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()
  const { error, postSchedule, putSchedule } = useSchedule();
    
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
        await putSchedule({
          id,
          name: values.name, 
          description: values.description, 
          price: values.price,
        });
        history.push("/home");
        return
      }
      await postSchedule(values);
      history.push("/home");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  const ValidationNameError = useMemo(
    () => <Styled.Error>{formik.errors.name}</Styled.Error>, [formik.errors.name]
  );

  const ValidationDescriptionError = useMemo(
    () => <Styled.Error>{formik.errors.description}</Styled.Error>, [formik.errors.description]
  );

  const ValidationPriceError = useMemo(
    () => <Styled.Error>{formik.errors.price}</Styled.Error>, [formik.errors.price]
  );

  return (
    <Container
      title="Agendar uma consulta"
      size="sm"
    >
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Especialidade</Styled.ProfileLabel>
          <Styled.ProfileSelect
            id="doctorType"
            name="doctorType"
            onChange={formik.handleChange}            
            isValid={formik.touched.doctorType && !formik.errors.doctorType}
            isInvalid={formik.errors.doctorType}>
              <Styled.ProfileOption>Selecione a especialidade</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Feminino</Styled.ProfileOption>
              <Styled.ProfileOption value="female">Masculino</Styled.ProfileOption>
              <Styled.ProfileOption value="others">Prefiro não responder</Styled.ProfileOption>
          </Styled.ProfileSelect>
          {ValidationNameError}
        </Form.Group>

        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Médico</Styled.ProfileLabel>
          <Styled.ProfileSelect
            id="doctor"
            name="doctor"
            onChange={formik.handleChange}            
            isValid={formik.touched.doctor && !formik.errors.doctor}
            isInvalid={formik.errors.doctor}>
              <Styled.ProfileOption>Selecione a especialidade</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Feminino</Styled.ProfileOption>
              <Styled.ProfileOption value="female">Masculino</Styled.ProfileOption>
              <Styled.ProfileOption value="others">Prefiro não responder</Styled.ProfileOption>
          </Styled.ProfileSelect>
          {ValidationNameError}
        </Form.Group>
        
        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Data</Styled.ProfileLabel>
          <Styled.ProfileSelect
            id="date"
            name="date"
            onChange={formik.handleChange}            
            isValid={formik.touched.doctor && !formik.errors.doctor}
            isInvalid={formik.errors.doctor}>
              <Styled.ProfileOption>Selecione a especialidade</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Feminino</Styled.ProfileOption>
              <Styled.ProfileOption value="female">Masculino</Styled.ProfileOption>
              <Styled.ProfileOption value="others">Prefiro não responder</Styled.ProfileOption>
          </Styled.ProfileSelect>
          {ValidationNameError}
        </Form.Group>

        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Hora</Styled.ProfileLabel>
          <Styled.ProfileSelect
            id="date"
            name="date"
            onChange={formik.handleChange}            
            isValid={formik.touched.doctor && !formik.errors.doctor}
            isInvalid={formik.errors.doctor}>
              <Styled.ProfileOption>Selecione a especialidade</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Feminino</Styled.ProfileOption>
              <Styled.ProfileOption value="female">Masculino</Styled.ProfileOption>
              <Styled.ProfileOption value="others">Prefiro não responder</Styled.ProfileOption>
          </Styled.ProfileSelect>
          {ValidationNameError}
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            id="cep"
            name="cep"
            placeholder="Coloque o CEP"
            onChange={formik.handleChange}
            isValid={formik.touched.cep && !formik.errors.cep}
            isInvalid={formik.errors.cep}
          />
          {ValidationNameError}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="street"
            name="street"
            placeholder="Coloque o logradouro"
            onChange={formik.handleChange}            
            isValid={formik.touched.street && !formik.errors.street}
            isInvalid={formik.errors.street}
          />
          {ValidationNameError}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            id="district"
            name="district"
            placeholder="Coloque o bairro"
            onChange={formik.handleChange}            
            isValid={formik.touched.district && !formik.errors.district}
            isInvalid={formik.errors.district}
          />
          {ValidationNameError}
        </Form.Group>
        
        {AppError}
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form> 
    </Container>
  );
}

export default CreateSchedules;