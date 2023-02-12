import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftSidebar from "../pages/Shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../pages/Shared/RightSidebar/RightSidebar";

const MainLayout = () => {
  return (
    <div>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Container>
        <Row>
          <Col className="d-none d-lg-block">
            <LeftSidebar />
          </Col>
          <Col lg={7}>
            <Outlet />
          </Col>
          <Col>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default MainLayout;
