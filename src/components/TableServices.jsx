import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const TableServices = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }
  
        setServicesData(data);
      } catch (error) {
        setServicesData({ message: error.message });
      }
    };
  
    fetchData();
  }, []);
  

  if (servicesData === null) {
    return (
      <div className="text-white text-center">
        <h3>Cargando datos...</h3>
      </div>
    );
  }

  if (servicesData.message) {
    return (
      <div className="text-white text-center">
        <h1>{servicesData.message}</h1>
      </div>
    );
  }

  if (servicesData.length === 0) {
    return (
      <div className="text-white text-center">
        <h1>No se encontraron servicios.</h1>
      </div>
    );
  }

  return (
    <Table  hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {servicesData.map((service, index) => (
          <tr key={service.id}>
            <td>{service.id}</td>
            <td>{service.name}</td>
            <td>{service.username}</td>
            <td>{service.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TableServices.propTypes = {
  servicesData: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({
      message: PropTypes.string
    })
  ])
};

export default TableServices;
