import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import BrandsCarousel from "../BrandsCarousel/BrandsCarousel";

const RightSidebar = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
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
