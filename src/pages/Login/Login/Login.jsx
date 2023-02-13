import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState(null);
  const { signInUser, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        // clear the error
        setError(null);

        // after sign in we know that the user email is verified or not
        // navigate if user email is verified otherwise show toaster
        if (user?.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Email is not verified");
        }
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Form
      onSubmit={handleLogin}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        background: "whitesmoke",
        padding: "12px",
        borderRadius: "8px",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      {error && (
        <Form.Group>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
      )}
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
