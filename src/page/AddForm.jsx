
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import '../App.css'


const AddForm = ({ show, setShow, product, add, edit }) => {
    const [formValues, setFormValues] = useState(null);
    const [thumbnail, setThumbnail] = useState('')


    const handleThumbnail = (e) => {
        setThumbnail(e.target.files[0].name)
        console.log(e.target.files[0], "====================")
        // setFormValues(prevState =>( {...prevState, }))
        setFormValues({ ...formValues, thumbnail: e.target.files[0].name })
    }
    useEffect(() => {
        setFormValues(product)
    }, [product])

    const handleClose = () => {
        setFormValues(null)
        setShow(prevState => !prevState)
    };

    const handleChange = (e) => {
        // const key = e.target.name;
        // const value = e.target.value;
        // console.log(value)
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        product ? edit(formValues) : add(formValues);
        handleClose();
    }

    return (
        <div>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >

                <Modal show={show} onHide={handleClose} >
                    <div className='modal-content'>
                        <Modal.Dialog style={{ width: '400px' }}>
                            <Form onSubmit={handleSubmit}>
                                <Modal.Header>
                                    <Modal.Title>{product ? "Edit Product" : "Add new Product"}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Group controlId="file" className="mb-3">
                                        <Form.Control type="file" onChange={handleThumbnail} name="thumbnail" value={""} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId='title'>
                                        <Form.Control placeholder="Title" onChange={handleChange} name="title" value={formValues?.title} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Control placeholder="Description" onChange={handleChange} name="description" value={formValues?.description} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId='price'>
                                        <Form.Control placeholder="Price" onChange={handleChange} name="price" value={formValues?.price} />
                                    </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                                    <Button variant="primary" type="submit">Save</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Dialog>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default AddForm;