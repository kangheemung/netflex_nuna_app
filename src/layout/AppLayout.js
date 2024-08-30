import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import handImage from './hand_700px.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';


const AppLayout = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img
          alt="Hand Icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png"
          width="50"
          height="50"
          margin_right="5px"
          className="d-inline-block align-top"
        />
          <Navbar.Brand href="/">Movie_app</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Homepage</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/movies/:id">MoviesDtail</Nav.Link>
          </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button variant="danger">Submit</Button>
          </Col>
        </Row>
      </Form>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default AppLayout
