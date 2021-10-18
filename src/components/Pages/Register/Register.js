import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div className="m-5">
            <h1>Register</h1>
            <Form className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p>By creating an account, you are agreeing to our <a href='#.'>Terms and Conditions</a>.</p>
                <Button className="mb-5" variant="dark" type="submit">
                    Submit
                </Button>
                <h5 className="mb-3">Do you want to create account with google or github?</h5>
                <button onClick={signInUsingGoogle} className="btn btn-dark mx-3">Google Sign in</button>
                <button onClick={signInUsingGithub} className="btn btn-dark">Github Sign in</button>
                <br />
                <Link to="/login">Already Registered?</Link>
            </Form>
        </div>
    );
};

export default Register;