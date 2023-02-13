import React, { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        //
      })
      .catch(console.error);
  };
  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none">
            Dragon News
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              user.photoURL ? (
                <Nav.Link as="p">
                  <Image
                    roundedCircle
                    style={{ height: "35px" }}
                    src={user.photoURL}
                  />
                </Nav.Link>
              ) : (
                <Nav.Link as="p">
                  <FaUser />
                </Nav.Link>
              )
            ) : null}
            {user ? (
              <Nav.Link as="p">
                <Button onClick={handleLogOut} variant="outline-secondary">
                  Logout
                </Button>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as="p">
                  <Link to="/login">Login</Link>
                </Nav.Link>
                <Nav.Link as="p">
                  <Link to="/register">Register</Link>
                </Nav.Link>
              </>
            )}
          </Nav>
          {/* show categories in small device*/}
          <div className="d-lg-none">
            <LeftSidebar />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
