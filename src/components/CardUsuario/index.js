import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useUsuarios } from '../../hooks/contexts/UsuariosProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardUsuario({usuario}) {

  const history = useHistory();

  const { deleteUsuarios } = useUsuarios();
  const handleDelete = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluir esse usuário?',
      text: "Caso exclua, será permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir!',
      cancelButtonText: 'Não, quero cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUsuarios({id: usuario.id});
        swalWithBootstrapButtons.fire(
          'Excluido!',
          'Usuário foi excluido!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Usuário não foi excluido!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`editar-usuario/${usuario.id}`, {usuario});
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{usuario.name}</Card.Title>
        <p>Id usuário: {usuario.id}</p>
        <Button variant="primary" onClick={handleDelete}>
          Excluir
        </Button>{" "}
        <Button variant="primary" type="submit" onClick={handleEdit}>
          Editar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardUsuario;