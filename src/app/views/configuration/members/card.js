import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateOrCreate } from '../../../redux/BREAD/actions'
import { Select } from '@material-ui/core'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ValidatorForm } from 'react-material-ui-form-validator'

const Card = ({ model, visible, onClose, updateOrCreate }) => {
    const [user, setUser] = useState(model)
    const title = model.id ? 'Update User' : 'Add User'
    const btnMsg = model.id ? 'Update' : 'Submit'

    useEffect(() => {
        setUser(model)
    }, [visible, model])

    // const handleChange = async (e) => {
    // let opt = <MenuItem key={`role-0`} value=''>Roles</MenuItem>
    // const roles = await listDetails('roles');
    // console.log(roles);
    // if (roles) {
    //     roles.map((role) => (
    //       opt =  <MenuItem key={`role-${role.id}`} value={role.id}>{role.display_name}</MenuItem>
    //     ))
    // }
    // }

    const handleSubmit = async () => {
        await updateOrCreate('users', user)
        onClose()
    }

    return (
        <Modal id="modal" show={visible} backdrop="static" keyboard={false}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Select Role"
                        defaultValue={user.rolename}
                        onChange={(value) =>
                            setUser({ ...user, role_id: value })
                        }
                    >
                        {/* {handleChange()} */}
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
