import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button, FormControl, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Styled } from './styles';
import { validationSchema } from './validation';
import { useSchedule } from '../../hooks/contexts/ScheduleProvider';
import Container from '../../components/Container';
import Swal from 'sweetalert2';

function CreateSchedules() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation();
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
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Agendamento feito com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
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
      size="form"
    >
      <Form onSubmit={formik.handleSubmit} style={{paddingRight: '15px', overflowY: "scroll"}}>
        <Form.Group className="mb-2">
          <Styled.ProfileLabel>Especialidade</Styled.ProfileLabel>
          <Styled.ProfileSelect
            id="doctorType"
            name="doctorType"
            onChange={formik.handleChange}            
            isValid={formik.touched.doctorType && !formik.errors.doctorType}
            isInvalid={formik.errors.doctorType}>
              <Styled.ProfileOption value="male">Selecione a especialidade</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Acupuntura</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Alergia e Imunologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Anestesiologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Angiologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Cardiologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Coloproctologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Dermatologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Endocrinologia e Metabologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Endoscopia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Gastroenterologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Genética Médica</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Geriatria</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Ginecologia e Obstetrícia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Hematologia e Hemoterapia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Homeopatia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Infectologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Mastologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Nefrologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Neurocirurgia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Neurologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Nutrologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Oftalmologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Oncologia Clínica</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Ortopedia e Traumatologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Otorrinolaringologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Patologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Pediatria</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Pneumologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Psiquiatria</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Radiologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Radioterapia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Reumatologia</Styled.ProfileOption>
              <Styled.ProfileOption value="male">Urologia</Styled.ProfileOption>
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
              <Styled.ProfileOption value="male">Selecione o médico</Styled.ProfileOption>
              
          </Styled.ProfileSelect>
          {ValidationDoctorError}
        </Form.Group>
        
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Styled.ProfileLabel>Data</Styled.ProfileLabel>
              <FormControl
                id="date"
                name="date"
                type="date"
                data-date-format="DD/MM/YYYY"
                onChange={formik.handleChange}            
                isValid={formik.touched.date && !formik.errors.date}
                isInvalid={formik.errors.date} />
              {ValidationDateError}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-2">
              <Styled.ProfileLabel>Hora</Styled.ProfileLabel>
              <Styled.ProfileSelect
                id="hour"
                name="hour"
                onChange={formik.handleChange}            
                isValid={formik.touched.hour && !formik.errors.hour}
                isInvalid={formik.errors.hour}>
                  <Styled.ProfileOption>Selecione a hora</Styled.ProfileOption>
                  <Styled.ProfileOption value='8'>08:00</Styled.ProfileOption>
                  <Styled.ProfileOption value='9'>09:00</Styled.ProfileOption>
                  <Styled.ProfileOption value='10'>10:00</Styled.ProfileOption>
                  <Styled.ProfileOption value='11'>11:00</Styled.ProfileOption>
                  <Styled.ProfileOption value='12'>12:00</Styled.ProfileOption>
                  <Styled.ProfileOption value='13'>13:00</Styled.ProfileOption>
                  <Styled.ProfileOption value='14'>14:00</Styled.ProfileOption>
                  <Styled.ProfileOption value='15'>15:00</Styled.ProfileOption>
                  <Styled.ProfileOption value='16'>16:00</Styled.ProfileOption>
                  <Styled.ProfileOption value='17'>17:00</Styled.ProfileOption>
              </Styled.ProfileSelect>
              {ValidationHourError}
            </Form.Group>
          </Col>
        </Row>
        
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
        {AppError}
        <Button style={{backgroundColor: '#272343'}} variant="primary" type="submit">
          Agendar
        </Button>
      </Form> 
    </Container>
  );
}

export default CreateSchedules;