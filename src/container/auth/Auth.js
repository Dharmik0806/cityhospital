import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
// import Signin from '../signin/Signin';

function Auth(props) {

    const [type, setType] = useState('signup');

    return (
        <div className='signup_container container'>
            <Form>

                {
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

                {
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
                
            </Form>


            {/* <div> */}
            {/* <NavLink exact   to="/signin">Already Have An Account ?</NavLink> */}
            <a onClick={() => { setType('login') }} >Already Have An Account ?</a>
            {/* </div> */}
        </div>
    );
}

export default Auth;