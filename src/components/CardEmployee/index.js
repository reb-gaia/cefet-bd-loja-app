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
        confirmButton: 'btn btn-success m-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluir esse funcionário?',
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
          'Funcionário foi excluido!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Funcionário não foi excluido!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`edit-employee/${employee.id}`, {employee});
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{employee.pessoa.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{employee.pessoa.email} | {employee.pessoa.telefone}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{employee.pessoa.logradouro}</Card.Subtitle>
        <Card.Text>
          {employee.pessoa.cidade}, {employee.pessoa.estado}
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default CardEmployee;