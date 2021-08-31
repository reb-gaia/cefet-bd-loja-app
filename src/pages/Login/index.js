import React, { useMemo } from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import { useFormik } from 'formik';
import { useAuth } from '../../hooks/contexts/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Styled } from './styles';
import { validationSchema } from './validation'

function Login() {
  const { SignIn, error } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async values => {
      await SignIn(values);
      if(error !== 'Email e senha inválidos') {
        history.push("/");
        history.go(0);
      }
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  const ValidationEmailError = useMemo(
    () => <Styled.Error>{formik.errors.email}</Styled.Error>, [formik.errors.email]
  );
  const ValidationPasswordError = useMemo(
    () => <Styled.Error>{formik.errors.password}</Styled.Error>, [formik.errors.password]
  );

  return (
    <Container
      title="Login"
      size="login"
    >
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            name="email"
            placeholder="Seu email"
            onChange={formik.handleChange}
            isValid={formik.touched.email && !formik.errors.email}
            isInvalid={formik.errors.email}
          />
          {ValidationEmailError}
        </Form.Group>
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
        <Button style={{backgroundColor: '#272343'}} variant="primary" type="submit" className="d-grid gap-2 col-6 mx-auto">
          Entrar
        </Button>
      </Form> 
    </Container>
  );
}

export default Login;