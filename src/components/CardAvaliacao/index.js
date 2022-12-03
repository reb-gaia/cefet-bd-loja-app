import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useAvaliacoes } from '../../hooks/contexts/AvaliacoesProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardAvaliacoes({avaliacao}) {

  const history = useHistory();

  const { deleteAvaliacoes } = useAvaliacoes();
  const handleDelete = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluir essa avaliação?',
      text: "Caso exclua, será permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir!',
      cancelButtonText: 'Não, quero cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAvaliacoes({id: avaliacao.id});
        swalWithBootstrapButtons.fire(
          'Excluida!',
          'Avaliação foi excluida!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Avaliação não foi excluida!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`editar-avaliacao/${avaliacao.id}`, {avaliacao});
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Nota: {avaliacao.nota}</Card.Title>
        <p style={{marginBottom: '0.4rem'}}>App: {avaliacao.nome_app}</p>
        <p >Id Compra: {avaliacao.id_compra}</p>
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

export default CardAvaliacoes;