import {Container,Row,Col,Navbar,Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';



function Navheader() {

    

  return (
    <>
    <Container>
        <Row>
            <Col>
                <Navbar fixed='top' style={{ backgroundColor: '#286575', textDecoration: 'none' }}  >
                    <Container>
                        <Navbar.Brand href='#' style={{ textDecoration: 'none' ,color:'white'}}>
                           <img src='assets/logo.png' height={30} width={50} className='align-top' />
                           &nbsp;
                           EduQuest
                        </Navbar.Brand>
                        
                        <Nav className='fw-bold ' >
                        <Nav.Link ><Link to="/" style={{ textDecoration: 'none' ,color:'white'}}>Home</Link></Nav.Link>
    <Nav.Link style={{ textDecoration: 'none' }}><Link to="/about" style={{ textDecoration: 'none' ,color:'white'}}>About Us</Link></Nav.Link>
    <Nav.Link style={{ textDecoration: 'none' }}><Link to="/register" style={{ textDecoration: 'none' ,color:'white'}}>Register</Link></Nav.Link>
    <NavDropdown title='Login' style={{ textDecoration: 'none' ,color:'white'}}>
        <NavDropdown.Header>As</NavDropdown.Header>
        <NavDropdown.Divider></NavDropdown.Divider>
        <NavDropdown.Item style={{ textDecoration: 'none' }}><Link to="/adminsignin" style={{ textDecoration: 'none' ,color:'green'}}>Admin</Link></NavDropdown.Item>
        <NavDropdown.Item style={{ textDecoration: 'none' }}><Link to="/teachersignin" style={{ textDecoration: 'none' ,color:'green'}}>Teacher</Link></NavDropdown.Item>
        <NavDropdown.Item style={{ textDecoration: 'none' }}><Link to="/studentsignin" style={{ textDecoration: 'none' ,color:'green'}}>Student</Link></NavDropdown.Item>
    </NavDropdown>
    
                        </Nav>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Navheader;