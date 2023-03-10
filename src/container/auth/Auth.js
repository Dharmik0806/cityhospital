//only conditional rendaring not do not get errore 

import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { NavLink, Route } from 'react-router-dom'
import PrivateRoute from '../../Routes/PrivateRoute';
// import Signin from '../signin/Signin';

function Auth(props) {

    const [type, setType] = useState('login');
    const [reset, setReset] = useState(false)

    const loginData = () => {
        localStorage.setItem("user", 123);
    }

    console.log(localStorage.getItem("user"));

    return (
        <div className='signup_container container' id='signin'>
            <Form>

                {
                     reset === true ? <h1>Reset Password</h1> :
                        type === 'signup' ?
                            <h1>Sign up</h1>
                            :
                            <h1>Log in .......... </h1>
                }
                {
                    reset === true ? null :
                        type === 'signup' ?
                            <FormGroup>
                                <Label for="Fname">
                                    User Name
                                </Label>
                                <Input
                                    id="Fname"
                                    name="email"
                                    placeholder="Enter Full Name"
                                    type="email"
                                />
                            </FormGroup>
                            :
                            null
                }

                {
                    reset === true ? null :
                        type === 'signup' ?
                            <FormGroup>
                                <Label for="Mono">
                                    User Name
                                </Label>
                                <Input
                                    id="Mono"
                                    name="email"
                                    placeholder="Mo no"
                                    type="mono"
                                />
                            </FormGroup> :
                            null
                }

                <FormGroup>
                    <Label for="useremail">
                        Email
                    </Label>
                    <Input
                        id="useremail"
                        name="email"
                        placeholder="Enter Email"
                        type="email"
                    />
                </FormGroup>

                {
                    reset === true ? null :
                        <FormGroup>
                            <Label for="userPassword">
                                Password
                            </Label>
                            <Input
                                id="userPassword"
                                name="password"
                                placeholder="password"
                                type="password"
                            />
                        </FormGroup>

                }

                {
                    reset === true ? null :
                        type === 'signup' ?
                            <FormGroup>
                                <Label for="exampleText">
                                    Date
                                </Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    placeholder="D.O.B"
                                    type="date"
                                />
                            </FormGroup>
                            :
                            null
                }

                {
                    reset === true ? null :
                        type === 'signup' ?
                            <FormGroup>
                                <Label for="exampleText">
                                    Text Area
                                </Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    placeholder="Address"
                                    type="textarea"
                                />
                            </FormGroup>
                            :
                            null
                }

                <FormGroup check>
                    <Input
                        id="exampleCheck"
                        name="check"
                        type="checkbox"
                    />
                    <Label check for="exampleCheck">
                        Check me out
                    </Label>
                </FormGroup>

                <input type="submit" onClick={() => loginData()} value="Submit" />

            </Form>

            {
                reset ?
                    <>
                        <a onClick={() => { setType('login'); setReset(false) }} >Already Have An Account? Login</a>
                    </>
                    :
                    type === 'signup' ?
                        // <p> <a onClick={() => { setType('signup') }} >login ?</a></p>
                        <a onClick={() => { setType('login'); setReset(false) }} >Already Have An Account? Login</a>
                        :
                        <>
                            <a onClick={() => { setType('signup'); setReset(false) }} >Create an account? Signup</a> <br />
                            <a onClick={() => { setReset(true) }} >Forgot password?</a>
                        </>

            }


        </div>
    );
}

export default Auth;


// Route => Public and PrivateRoute

// public => retricted 