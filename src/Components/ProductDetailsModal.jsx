import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductDetailsModal = ({ show, onHide, product }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product?.image_url} alt={product?.name} className="img-fluid" />
        <p>{product?.description}</p>
        <p>Price: ${product?.price}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetailsModal;
