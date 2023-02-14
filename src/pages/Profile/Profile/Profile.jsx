import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  // useRef returns a mutable ref object with a "current" property
  // The returned object will persist (not change) for the full lifetime of the compnent
  // Accepts one argument which initialzes the "current" property of the returned object
  const photoURLRef = useRef(null);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log(photoURLRef.current.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form
      onSubmit={handleUpdateProfile}
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
        <Form.Control
          value={name}
          onChange={handleNameChange}
          name="name"
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Photo URL:</Form.Label>
        <Form.Control
          defaultValue={user.photoURL}
          ref={photoURLRef}
          name="photoURL"
          type="text"
          placeholder="Enter photo url"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          defaultValue={user.email}
          name="email"
          type="email"
          placeholder="Enter email"
          readOnly
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update Profile
      </Button>
    </Form>
  );
};

export default Profile;
