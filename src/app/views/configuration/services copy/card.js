import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateOrCreate } from '../../../redux/BREAD/actions'
import { Select, MenuItem } from '@material-ui/core'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const Card = ({ model, visible, onClose, updateOrCreate }) => {
    const [service, setService] = useState(model)
    const title = model.id ? 'Update Service' : 'Add Service'
    const btnMsg = model.id ? 'Update' : 'Submit'

    useEffect(() => {
        setService(model)
    }, [visible, model])
    const handleChange = (e) => {
        const { name, value } = e.target
        setService({ ...service, [name]: value })
    }
    const handleSubmit = async () => {
        await updateOrCreate('service', service)
        onClose()
    }

    return (
        <Modal id="modal" show={visible} backdrop="static" keyboard={false}>
            <Modal.Header closeButton onClick={onClose}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ValidatorForm onSubmit={handleSubmit}  onError={() => null}>
                    <TextValidator
                        className="mb-4 w-full"
                        label="Title"
                        onChange={handleChange}
                        type="text"
                        name="title"
                        value={service.title}
                    />
                    <TextValidator
                        className="mb-4 w-full"
                        label="Description"
                        onChange={handleChange}
                        type="textarea"
                        name="description"
                        value={service.description}
                    />
                    <TextValidator
                        className="mb-4 w-full"
                        label="Price"
                        onChange={handleChange}
                        type="number"
                        name="price"
                        value={service.price}
                    />
                    <TextValidator
                        className="mb-4 w-full"
                        label="Color"
                        onChange={handleChange}
                        type="text"
                        name="color"
                        value={service.color}
                    />
                    <TextValidator
                        className="mb-4 w-full"
                        label="Size"
                        onChange={handleChange}
                        type="text"
                        name="size"
                        value={service.size}
                    />
                    <Select
                        style={{ width: "100%" }}
                        placeholder="Select Category"
                        defaultValue='serviceable'
                        onChange={(value) => setService({ ...service, category: value })}
                    >
                        <MenuItem  value='serviceable'>Serviceable</MenuItem>
                        <MenuItem  value='consumeable'>Consumeable</MenuItem>
                    </Select>
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
                    <span className="pl-2 capitalize">{btnMsg}</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default connect(null, { updateOrCreate })(Card)
