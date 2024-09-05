import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import handImage from './hand_700px.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, useNavigate } from 'react-router-dom';
import './AppLayout.style.css'
import hambergerIcon from './hamberger.png';


const AppLayout = () => {
  const [keyword,setKeyword]=useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate=useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const serchBykeyword =(e)=>{
    e.preventDefault();
    //url를 바꿔준다.
    if (keyword.trim() === '') {
      navigate(`/movies`); // Navigate back to the original list
    } else {
      setSearchResults([]);
      navigate(`/movies?q=${keyword}`);
    }
      setKeyword('');
    };

  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='Navbar_full'>
      <Navbar bg="dark" data-bs-theme="dark">

        <Container>
        <img
            src={hambergerIcon}
            width="45"
            height="45"
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
          <div className='search_box'>
            <Form  inline="true"className='d-flex' onSubmit={serchBykeyword}>
              <Row className="justify-content-center">
              <Col xs="auto">
                <Form.Control
                  value={keyword}
                  onChange={(e) =>setKeyword(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button variant="outline-danger" type="submit">Submit</Button>
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
              <Form  inline="true" onSubmit={serchBykeyword}>
              <Row className="justify-content-center">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  value={keyword}
                  placeholder="Search"
                  className=" mr-sm-2"
                  onChange={(e) =>setKeyword(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button className="button_sidebar"variant="outline-danger" type="submit">Submit</Button>
              </Col>
               </Row>
            </Form>
            </div>
            {/* Sidebar End */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout
