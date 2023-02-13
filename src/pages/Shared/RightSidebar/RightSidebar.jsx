import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import BrandsCarousel from "../BrandsCarousel/BrandsCarousel";

const RightSidebar = () => {

  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitch /> Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaYoutube /> Youtube</ListGroup.Item>
          <ListGroup.Item className="mb-2">Terms & conditions</ListGroup.Item>
        </ListGroup>
      </div>
      <BrandsCarousel />
    </div>
  );
};

export default RightSidebar;
