import Card from 'react-bootstrap/Card';

const ProductCard = ({ product, handleEdit, onDelete }) => {

    return (
        <Card>
            <Card.Img style={{ height: 200 }} variant="top" src={product.thumbnail} />
            <Card.Body>
           
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                    Price <b>${product.price}</b>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => handleEdit(product)}>
                    Edit
                </button>
                <button type="button" className="btn btn-danger btn-sm " onClick={() => onDelete(product.id)}>
                    Delete
                </button>
            </Card.Footer>
        </Card>
    );
};

export default ProductCard