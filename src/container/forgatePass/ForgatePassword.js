import React from 'react';
import {Form , FormGroup , Label , Input} from 'reactstrap';

function ForgatePassword(props) {
    return (
        <div className='signup_container container'>
            <Form>
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
            </Form>
        </div>
    );
}

export default ForgatePassword;