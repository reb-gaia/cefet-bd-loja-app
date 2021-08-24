import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import Container from '../../components/Container';
import { Styled } from './styles';
import { useSchedule } from '../../hooks/contexts/ScheduleProvider';
import { validationSchema } from './validation';


function Schedules() {
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
      email: state ? state.product.description : "",
      phone: state ? state.product.phone : "",
      doctor: state ? state.product.doctor : "",
      date: state ? state.product.date : "",
      hour: state ? state.product.hour : "",
    },
    validationSchema,
    onSubmit: async values => {
      if(!!id) {
        await putProduct({
          id,
          name: values.name, 
          description: values.description, 
          price: values.price,
        });
        history.push("/home");
        return
      }
      await postProduct(values);
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
      title="Criar Produto"
      size="sm"
    >
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control
            id="name"
            name="name"
            placeholder="Coloque o nome do produto"
            onChange={formik.handleChange}
            isValid={formik.touched.name && !formik.errors.name}
            isInvalid={formik.errors.name}
          />
          {ValidationNameError}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            id="description"
            name="description"
            placeholder="Coloque uma descrição do produto"
            onChange={formik.handleChange}            
            isValid={formik.touched.description && !formik.errors.description}
            isInvalid={formik.errors.description}
          />
          {ValidationDescriptionError}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Preço</Form.Label>
          <Form.Control
            id="price"
            name="price"
            type="number"
            placeholder="Digite o preço do produto"
            onChange={formik.handleChange}
            isValid={formik.touched.price && !formik.errors.price}
            isInvalid={formik.errors.price}          
          />
          {ValidationPriceError}
        </Form.Group>
        {AppError}
        <Button variant="primary" type="submit">
          Criar produto
        </Button>
      </Form> 
    </Container>
  );
}

export default Schedules;