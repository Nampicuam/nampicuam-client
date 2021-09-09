import {
    Button,
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
} from '@material-ui/core'
import history from 'history.js'
import React, { useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'
import { itala, tignan } from '../../../redux/talaan'

const Register = () => {
    const [state, setState] = useState({})
    // constructor() {
    //     super()

    // }

    const handleChange = ({ target: { name, value } }) =>
        setState({ ...state, [name]: value })

    const handleFormSubmit = (event) => {
        tignan('auth', { email: state.email }).then(async (res) => {
            if (res === undefined) {
                setState({ ...state, message: 'E-mail address already taken' })
            } else {
                if (state.password !== state.cpassword) {
                    setState({ ...state, message: 'Passwords does not match' })
                } else {
                    await itala('auth', state)
                    history.push('/session/landing')
                }
            }
        })
    }

    let {
        lrn,
        name,
        fname,
        mname,
        lname,
        suffix,
        email,
        password,
        cpassword,
        is_male,
        message,
    } = state

    return (
        <div
            style={{ background: '#1A2038' }}
            className="flex justify-center items-center  min-h-full-screen"
        >
            <Card style={{ maxWidth: 800, borderRadius: 12, margin: '1rem' }}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center bg-light-gray items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/illustrations/posting_photo.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="LRN"
                                    onChange={handleChange}
                                    type="text"
                                    name="lrn"
                                    value={lrn || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Alias"
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    value={name || ''}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="First name"
                                    onChange={handleChange}
                                    type="text"
                                    name="fname"
                                    value={fname || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Middle name"
                                    onChange={handleChange}
                                    type="text"
                                    name="mname"
                                    value={mname || ''}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Last name"
                                    onChange={handleChange}
                                    type="text"
                                    name="lname"
                                    value={lname || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Suffix"
                                    onChange={handleChange}
                                    type="text"
                                    name="suffix"
                                    value={suffix || ''}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={email || ''}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    value={password || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    label="Confirm Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="cpassword"
                                    type="password"
                                    value={cpassword || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <FormControlLabel
                                    className="mb-4"
                                    name="is_male"
                                    onChange={(e) =>
                                        handleChange({
                                            target: {
                                                name: 'is_male',
                                                value: e.target.checked,
                                            },
                                        })
                                    }
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={is_male || false}
                                        />
                                    }
                                    label="I'm Male."
                                />
                                {message && (
                                    <p className="text-error">{message}</p>
                                )}
                                <div className="flex items-center">
                                    <Button
                                        className="capitalize"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Sign up
                                    </Button>
                                    <span className="mx-2 ml-5">or</span>
                                    <Link to="/session/signin">
                                        <Button className="capitalize">
                                            Sign in
                                        </Button>
                                    </Link>
                                </div>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}
export default Register
