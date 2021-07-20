import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Container className="h-100">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Group>
          <Form.Text className="text-muted">
            Not registered yet? <Link to="/register">Click here</Link> to
            Register
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Login;
