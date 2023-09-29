import { register } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { Formik } from "formik";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { registerSchema } from '../schemas/register';

export const Register = () => {
  const { user } = useUserContext();
  useRedirectActiveUser(user, "/dashboard");

  const onSubmit = async (
    { email, password },
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      await register({ email, password });
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors({ email: "Email ya se encuentra registrado" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <h1 className="text-center text-white">¡Bienvenido!</h1>
          <div className="form-container shadow p-4">
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
              }}
              validationSchema={registerSchema}
              onSubmit={onSubmit} 
            >
              {({ errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <div className="error-message">{errors.name}</div>
                    ) : null}
                  </Form.Group>
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
                      {isSubmitting ? 'Registrando...' : 'Registrarme'}
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
