import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useEmployee } from '../../hooks/contexts/EmployeeProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardEmployee({employee}) {
  const history = useHistory();

  const { deleteEmployee } = useEmployee();
  const handleDelete = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluuir esse produto?',
      text: "Caso exclua, será permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir!',
      cancelButtonText: 'Não, quero cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee({id: employee.id});
        swalWithBootstrapButtons.fire(
          'Excluido!',
          'Seu produto foi excluido!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Seu produto foi salvo!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`edit-employees/${employee.id}`, {employee});
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{employee.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$ {employee.street}</Card.Subtitle>
        <Card.Text>
          {employee.city}
        </Card.Text>
        <Button variant="primary" onClick={handleDelete}>
          Excluir
        </Button>
        <Button variant="primary" type="submit" onClick={handleEdit}>
          Editar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardEmployee;