import { Formik } from "formik";
import { login } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { loginSchema } from '../schemas/login';
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import '../assets/forms.css';

export const Login = () => {
  const { user } = useUserContext();
  useRedirectActiveUser(user, "/dashboard");

  const onSubmit = async (
    { email, password },
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      await login({ email, password });

      resetForm();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrors({ email: "Usuario y/o contraseña incorrecta" });
      }
      if (error.code === "auth/wrong-password") {
        setErrors({ password: "Usuario y/o contraseña incorrecta" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <h1 className="text-center text-white">¡Bienvenido de vuelta!</h1>
          <div className="form-container shadow p-4">
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={loginSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </Form.Group>
                  <div className="d-grid">
                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
};


