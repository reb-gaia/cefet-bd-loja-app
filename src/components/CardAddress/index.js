import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useAddresses } from '../../hooks/contexts/AddressesProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardAddress({address}) {
  const history = useHistory();

  const { deleteAddresses } = useAddresses();
  const handleDelete = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluir esse endereço?',
      text: "Caso exclua, será permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir!',
      cancelButtonText: 'Não, quero cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAddresses({id: address.id});
        swalWithBootstrapButtons.fire(
          'Excluido!',
          'Endereço foi excluido!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Endereço não foi excluido!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`edit-address/${address.id}`, {address});
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{address.cep}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{address.logradouro}{", "}{address.bairro}</Card.Subtitle>
        <Card.Text>
          {address.cidade} - {address.estado} 
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CardAddress;