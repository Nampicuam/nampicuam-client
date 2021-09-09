import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateOrCreate } from '../../../redux/BREAD/actions'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const Card = ({ model, visible, onClose, updateOrCreate }) => {
    const [role, setRole] = useState(model)

    useEffect(() => {
        setRole(model)
    }, [visible, model])
    const handleChange = (e) => {
        const { name, value } = e.target
        setRole({ ...role, [name]: value })
    }
    const handleSubmit = async () => {
        await updateOrCreate('roles', role)
        onClose()
    }

    return (
        <Modal id="modal" show={visible} backdrop="static" keyboard={false}>
            <Modal.Header closeButton onClick={onClose}>
                <Modal.Title>Virtual Event Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span>

                </span>
                <ValidatorForm onSubmit={handleSubmit}  onError={() => null}>
                    <TextValidator
                        className="mb-4 w-full"
                        label="Name"
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={role.name}
                    />
                    <TextValidator
                        className="mb-4 w-full"
                        label="Display Name"
                        onChange={handleChange}
                        type="text"
                        name="display_name"
                        value={role.display_name}
                    />
                </ValidatorForm>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onClose}>
                    Close
                </Button>
                <Button
                    variant="outline-info"
                    type="submit"
                    onClick={handleSubmit}
                >
                    <span className="pl-2 capitalize">Request Pricing</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default connect(null, { updateOrCreate })(Card)
