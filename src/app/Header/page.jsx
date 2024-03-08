"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function page() {
  return (
    <>
    <Navbar expand="lg"   className="fixed-top header-scrolled">
      <Container >
        <Navbar.Brand href="/">
            <span className='logo-heading'>UME</span><span className="heading-span">BUS</span></Navbar.Brand>
            {/* <Image src={BusImg1} className='busimg' alt="" /> */}
        <Navbar.Toggle  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
      
            navbarScroll
          >
            
            <Nav.Link href="Buses">Buses</Nav.Link>
            <Nav.Link href="Trains">LiveBuses</Nav.Link>
        
            
           
           
          </Nav>
          <Nav
            className="ms-auto my-2 my-lg-0"
          
            navbarScroll
          >
      
            <Nav.Link href="offer">Offers</Nav.Link>
      
            <Nav.Link href="Truckticket">Buses Ticket</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Signup">SignUp</Nav.Link>
           
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default page;