import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useContext } from 'react';
import { context } from './Context';

function Example({ id }) {
    const { dispatch } = useContext(context)
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handlechange(e) {
        setUpdate({ ...update, [e.target.name]: e.target.value })
    }
    function handleUpdate() {
        dispatch({ type: "UPDATE", payload: update })
        let call = async () => {
            await axios.put("https://64ccec742eafdcdc851a7719.mockapi.io/users/" + id.id, update)
        }
        call()
        setShow(false)

    }
    useEffect(() => {
        setUpdate(id)

    }, [])



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                update
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
                    <input type='text' value={update.name} name='name' onChange={(e) => handlechange(e)}></input>
                    <label>Email</label>
                    <input type='text' value={update.email} name="email" onChange={(e) => handlechange(e)}></input>
                    <label>Phone</label>
                    <input type='text' value={update.phone} name="phone" onChange={(e) => handlechange(e)}></input>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdate}>
                        update
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;