import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Register = () => {
  const [TCAccepted, setTCAccepted] = useState(false);
  const [error, setError] = useState(null);
  const { createUser, updateUserProfile, verifyEmail, logOut } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError(null);

        // update user's profile
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (displayName, photoURL) => {
    // update specific properties
    const profile = { displayName, photoURL };

    updateUserProfile(profile)
      .then(() => {
        console.log("profile updated");

        // send verification email after updating the profile
        return verifyEmail();
      })
      .then(() => {
        // show toaster after sending verification email
        // <Toaster /> component is used at the app component
        toast.success("Please verify your email and sign in.");

        // logout the user to hit onAuthStateChange() after completing email verification and log in
        logOut();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleTCAccepted = (e) => {
    setTCAccepted(e.target.checked);
  };

  return (
    <Form
      onSubmit={handleRegister}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        background: "whitesmoke",
        padding: "12px",
        borderRadius: "8px",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name:</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Photo URL:</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter photo url"
        />
      </Form.Group>

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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onChange={handleTCAccepted}
          value={TCAccepted}
          type="checkbox"
          className="d-inline me-2"
        />
        <Form.Label className="d-inline">
          Accept <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </Form.Label>
      </Form.Group>
      {error && (
        <Form.Group>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
      )}
      <Button variant="primary" type="submit" disabled={!TCAccepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
