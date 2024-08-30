import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import handImage from './hand_700px.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import './AppLayout.style.css'


const AppLayout = () => {
  return (
    <div className='Navbar_full'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <div className='loge_img'>
        <img
          alt="Hand Icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
        </div>
          <Navbar.Brand href="/">Movie_app</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Homepage</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/movies/:id">MoviesDetail</Nav.Link>
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
            <Button variant="outline-danger">Submit</Button>
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
