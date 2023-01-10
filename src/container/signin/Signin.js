import React from 'react';
import { Form, FormGroup, Label, Input , Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
function Signin(props) {
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
            </Form>

            <div>
                    <NavLink exact   to="/forgatePass">Forgate Password ?</NavLink>
            </div>
        </div>
    );
}

export default Signin;