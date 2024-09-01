import React,{useState} from 'react'
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
import hambergerIcon from './hamberger.png';


const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='Navbar_full'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img
            src={hambergerIcon}
            width="50"
            height="50"
            className='hanberger'
            onClick={toggleSidebar}
            /> 
          <div className='loge_img'>
    
        <img
          alt="Hand Icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
        </div>
          <div className='app_name'><Navbar.Brand href="/">Movie_app</Navbar.Brand></div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

          <div className='header_text'>

          <Nav className="me-auto">
            <Nav.Link href="/" >Homepage</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/movies/:id">MoviesDetail</Nav.Link>
          </Nav>
          </div>
          <div>
            <Form  inline="true">
              <Row className="justify-content-center">
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

          </div>
         {/* Sidebar Start */}
         <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

              <Nav className="flex-column">
              <Nav.Link onClick={() => setIsSidebarOpen(false)}>X</Nav.Link>
                <Nav.Link href="/" >Homepage</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/movies/:id">MoviesDetail</Nav.Link>
              </Nav>
            </div>

            {/* Sidebar End */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default AppLayout
