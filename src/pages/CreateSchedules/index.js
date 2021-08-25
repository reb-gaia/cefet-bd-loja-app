import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button, FormControl } from 'react-bootstrap';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { Styled } from './styles';
import { validationSchema } from './validation';
import { useSchedule } from '../../hooks/contexts/ScheduleProvider';
import Container from '../../components/Container';


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
      name: state ? state.schedule.name : "",
      email: state ? state.schedule.email : "",
      phone: state ? state.schedule.phone : "",
      doctorType: state ? state.schedule.doctorType : "",
      doctor: state ? state.schedule.doctor : "",
      date: state ? state.schedule.date : "",
      hour: state ? state.schedule.hour : "",
    },
    validationSchema,
    onSubmit: async values => {
      if(!!id) {
        await putSchedule({
          id,
          name: values.name, 
          email: values.email, 
          phone: values.phone, 
          doctorType: values.doctorType,
          doctor: values.doctor,
          date: values.date,
          hour: values.hour,
        });
        history.push("/");
        return
      }
      await postSchedule(values);
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

  const ValidationDoctorTypeError = useMemo(
    () => <Styled.Error>{formik.errors.doctorType}</Styled.Error>, [formik.errors.doctorType]
  );

  const ValidationDoctorError = useMemo(
    () => <Styled.Error>{formik.errors.doctor}</Styled.Error>, [formik.errors.doctor]
  );

  const ValidationDateError = useMemo(
    () => <Styled.Error>{formik.errors.date}</Styled.Error>, [formik.errors.date]
  );

  const ValidationHourError = useMemo(
    () => <Styled.Error>{formik.errors.hour}</Styled.Error>, [formik.errors.hour]
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
          {ValidationDoctorTypeError}
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
              <Styled.ProfileOption value="male">Feminino</Styled.ProfileOption>
              <Styled.ProfileOption value="female">Masculino</Styled.ProfileOption>
              <Styled.ProfileOption value="others">Prefiro não responder</Styled.ProfileOption>
          </Styled.ProfileSelect>
          {ValidationDoctorError}
        </Form.Group>
        
        <Form.Group className="mb-2">
          <Form.Label>Data</Form.Label>
          <FormControl
            id="date"
            name="date"
            type="date"
          />
          {ValidationDateError}
        </Form.Group>

        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Hora</Styled.ProfileLabel>
          <Styled.ProfileSelect
            id="hour"
            name="hour"
            onChange={formik.handleChange}            
            isValid={formik.touched.hour && !formik.errors.hour}
            isInvalid={formik.errors.hour}>
              <Styled.ProfileOption>Selecione a especialidade</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Feminino</Styled.ProfileOption>
              <Styled.ProfileOption value="female">Masculino</Styled.ProfileOption>
              <Styled.ProfileOption value="others">Prefiro não responder</Styled.ProfileOption>
          </Styled.ProfileSelect>
          {ValidationHourError}
        </Form.Group>

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
        
        {AppError}
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form> 
    </Container>
  );
}

export default CreateSchedules;