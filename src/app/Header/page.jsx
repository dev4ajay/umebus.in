import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Modal, Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from 'next/router';
import { BaseUrl } from './../Baseurl';
function Page() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPNR, setShowPNR] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility
  // const [forgotPassword, setForgotPassword] = useState(false); // State for forgot password

const [formData , setFormData] = useState({
  name:"",
  email:"",
  password:""
})
const [values , setValue] = useState({
  password:"",
  email:"",
})  
const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);
  const handleClosePNR = () => setShowPNR(false);
  const handleShowPNR = () => setShowPNR(true);
  const handleCloseLogin = () => {
    setShowLogin(false);
    setShowPassword(false); // Reset showPassword state when closing the modal
    // setForgotPassword(false); // Reset forgotPassword state

  };
  const handleShowLogin = () => setShowLogin(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 

  const handleSubmitSignup = async (e) => {
    e.preventDefault();   
  
    if (formData.name === '' || formData.email === '' || formData.password === '') {
      Swal.fire({
        icon: "error",
        text: "Please check all details",
      });
      return;
    }
   await axios.post(`${BaseUrl}/register`, formData).then((res)=>{
      console.log(res);
      setFormData(res.data.user)
    })
      // Reset form data
      setFormData({
        password: "",
        name: "",
        email: ""
      });
    
  };
  
  const handleSubmitLogin = (e) => {
    e.preventDefault();
  
    if (!values.email === '' || !values.password === '') {
      Swal.fire({
        icon: "error",
        text: "Please fill in all fields.",
      });
      return;
    }
  
    axios.post(`${BaseUrl}/login`, values)
      .then((response) => {
        console.log(response);
        setValue(response.data.user)
    
  })}
  
  
  return (
    <>
      <Navbar expand="lg" className="fixed-top header-scrolled">
        <Container>
          <Navbar.Brand href="/">
            <span className='logo-heading'>UME</span><span className="heading-span">BUS</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="Buses">Buses</Nav.Link>
              <Nav.Link href="Trains">LiveBuses</Nav.Link>
            </Nav>
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="offer">Offers</Nav.Link>
              <Nav.Link onClick={handleShowPNR}>Buses Ticket</Nav.Link>
              <Nav.Link onClick={handleShowLogin}>
                Login
              </Nav.Link>
              <Nav.Link onClick={handleShowSignup}>
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container mt-3 mb-3">
          <Form.Group controlId="formBasicName" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" onChange={(e)=>setFormData({...formData , name:e.target.value})} placeholder="Enter Your Name" className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={(e)=>setFormData({...formData , email:e.target.value})} placeholder="Enter Your Email" className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter Password"
                  onChange={(e)=>setFormData({...formData , password:e.target.value})}
                />
                <InputGroup.Text onClick={togglePasswordVisibility}>
                  {showPassword ? <BiHide className="fs-3"/> : <BiShow className="fs-3"/>}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSignup}>
            Close
          </Button>
          <Button variant="primary" type="submit"  onClick={handleSubmitSignup} >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container mt-3 mb-3" >
            <Form.Group controlId="formBasicEmail" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={(e=>setValue({...values, email:e.target.value}))} className="form-control" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  // value={values.password}
                  onChange={(e=>setValue({...values, password:e.target.value}))}
                  className="form-control"
                  placeholder="Enter Password"
                />
                <InputGroup.Text onClick={togglePasswordVisibility}>
                  {showPassword ? <BiHide className="fs-3" /> : <BiShow className="fs-3" />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
         
            
           
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmitLogin}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showPNR} onHide={handleClosePNR}>
        <Modal.Header closeButton>
          <Modal.Title>Passenger Current Status Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container mt-3 mb-3">
            <Form.Group controlId="formBasicPNR" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>Enter PNR NO.</Form.Label>
              <Form.Control type="number" name="PNR" className="peer block w-full rounded border-2 border-gray-300 bg-white px-3  py-2 focus:outline-none focus:border-blue-500" placeholder="Enter PNR NO." />
            </Form.Group>
          
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePNR}>
            Close
          </Button>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Page;
