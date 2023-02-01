//formik and yup

import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
// import Signin from '../signin/Signin';

function Sighup(props) {
    return (
        <div className='signup_container container'>
            <Form>
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
                </FormGroup>
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
                <FormGroup check>
                    <Input
                        id="exampleCheck"
                        name="check"
                        type="checkbox"
                    />
                    <Label
                        check
                        for="exampleCheck"
                    >
                        Check me out
                    </Label>
                </FormGroup>
            </Form>


            {/* <div> */}
                    <NavLink exact   to="/signin">Already Have An Account ?</NavLink>
            {/* </div> */}
        </div>
    );
}

export default Sighup;