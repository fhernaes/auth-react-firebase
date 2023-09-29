import { Container, Row, Col } from 'react-bootstrap';
import { useUserContext } from "../context/UserContext";
import TableServices from '../components/tableServices';


export const Dashboard = () => {
  const { user } =  useUserContext();
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <h1 className='text-white'>Bienvenido: {user.email}</h1>
          <h2 className='text-white'>Datos de prueba de https://jsonplaceholder.typicode.com/users</h2>
          <TableServices />
        </Col>
      </Row>
    </Container>
  );
};



