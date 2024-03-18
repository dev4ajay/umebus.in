"use client"
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { BiHide, BiShow } from "react-icons/bi";
import axios from "axios";
import Swal from "sweetalert2";
import { BaseUrl } from './../Baseurl';
import OtpInput from 'react-otp-input';
function Page() {

  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPNR, setShowPNR] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility
  const [forgotPassword, setForgotPassword] = useState(false); // State for forgot password
  const [ResetPassword, setResetPassword] = useState(false); // State for Reset password

  const [Resetdata, setResetdata] = useState({
    email: "",
    newPassword: "",
    otp:"",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [LoginValue, setLoginValues] = useState({
    email: "",
    password: "",
  });
  
  const [Value , setValue ] = useState({
    email:"",
  })

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);
  const handleClosePNR = () => setShowPNR(false);
  const handleShowPNR = () => setShowPNR(true);
  const handleCloseForgot = () => setForgotPassword(false);
  const handleCloseReset = ()=>setResetPassword(false)
  
  const handleShowReset =()=>{
    setResetPassword(true)
    setForgotPassword(false)
  }
 

  const handleShowForgots = ()=> {
setForgotPassword(true)
setShowLogin(false);

  }
  const handleCloseLogin = () => {
    setShowLogin(false);
    setShowPassword(false); // Reset showPassword state when closing the modal
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

    try {
      const response = await axios.post(`${BaseUrl}/register`, formData);
      console.log(response);
      setFormData(response.data.user);
      // Reset form data
      setFormData({
        password: "",
        name: "",
        email: ""
      });
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          text: "! Register successfully !",
        });
        handleCloseSignup()
      }
    } catch (error) {
      console.error("Error occurred while submitting signup:", error);
    
      // Handle error scenario
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    if (LoginValue.email === '' || LoginValue.password === '') {
      Swal.fire({
        icon: "error",
        text: "Please check all details",
      });
      return;
    }

    try {
      const response = await axios.post(`${BaseUrl}/login`, LoginValue);
      
      setLoginValues(response.data.user);
      // Reset form data
      setLoginValues({
        email: "",
        password: ""
      });
      console.log(response.status);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          text: "! Login successfully !",
        });
        handleCloseLogin();
      }
      
   
    } catch (error) {
      console.error("Error occurred while submitting login:", error);
      if  (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          text: "!Invalid email / password!",
        });
      }
      // Handle error scenario
    }
  };


  const handleSubmitReset = async (e) => {
    e.preventDefault();

    // if (Resetdata.email === '' || Resetdata.newPassword === ''  || ResetPassword.otp ) {
    //   Swal.fire({
    //     icon: "error",
    //     text: "Please check all details",
    //   });
    //   return;
    // }

    try {
      const response = await axios.post(`${BaseUrl}/resetpassword`, Resetdata);
      
      setResetdata(response.data.user);
      // Reset form data
      setResetdata({
        email: "",
        newPassword: "",
        otp:"",

      });
      console.log(response.status);
      if (response.status === 200) {
        handleCloseReset();
        Swal.fire({
          icon: "success",
          text: "! Reset Password  successfully !",

        });
        handleCloseForgot();
      } 
      
   
    } catch (error) {
      console.error("Error occurred while submitting login:", error);
      if  (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          text: "!Invalid email / password!",
        });
      }
      // Handle error scenario
    }
  };
  const handleSubmitForgot = async (e) => {
    e.preventDefault();

    if (Value.email === '') {
      Swal.fire({
        icon: "error",
        text: "Please check all details",
      });
      return;
    }

    try {
      const response = await axios.post(`${BaseUrl}/forgot-password`, Value);
      console.log(response.data);
      setValue(response.data.user);
      // Reset form data
      setValue({
        email: "",
      
      });

      if (response.status === 200) {
        
        Swal.fire({
          icon: "success",
          text: "! Forgot password successfully !",
        });
        handleCloseLogin();
        handleShowReset();
      }
    } catch (error) {
      console.error("Error occurred while submitting forgot password:", error);
      if  (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          text: "!Invalid email / password!",
        });
      }
      // Handle error scenario
    }
  
 
  };
  

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
              <Form.Control type="email" name="email"   onChange={(e=>setLoginValues({...LoginValue, email:e.target.value}))} className="form-control" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  // value={values.password}
                  onChange={(e=>setLoginValues({...LoginValue, password:e.target.value}))}
                  className="form-control"
                  placeholder="Enter Password"
                />
                <InputGroup.Text onClick={togglePasswordVisibility}>
                  {showPassword ? <BiHide className="fs-3" /> : <BiShow className="fs-3" />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Button variant="link" className='text-decoration-none btn btn-primary text-white' onClick={handleShowForgots}>Forgot Password?</Button>  
                      
           
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
      <Modal show={ResetPassword} onHide={handleCloseReset}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container mt-3 mb-3" >
            <Form.Group controlId="formBasicEmail" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email"   onChange={(e=>setResetdata({...Resetdata, email:e.target.value}))} className="form-control" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>New Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="newPassword"      
                  onChange={(e=>setResetdata({...Resetdata, newPassword:e.target.value}))}
                  className="form-control"
                  placeholder="Enter New Password"
                />
                <InputGroup.Text onClick={togglePasswordVisibility}>
                  {showPassword ? <BiHide className="fs-3" /> : <BiShow className="fs-3" />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          
              <Form.Label>Enter Otp</Form.Label>
              <OtpInput
value={Resetdata?.otp}
onChange={(otp) => setResetdata({...Resetdata, otp: otp})}
numInputs={6}
name="otp"
id="otp"
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} className='otp-input' style={{width:"13%" ,height:"6vh" ,border :"1px solid green" ,boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" ,textAlign:"center" , fontSize:"18px"}} />}
    />               
           
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReset}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmitReset}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={forgotPassword} onHide={handleCloseForgot}>
        <Modal.Header closeButton>
          <Modal.Title>ForgotPassword</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container mt-3 mb-3" >
            <Form.Group controlId="formBasicEmail" className="col col-sm-12 mt-3 mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={(e=>setValue({...Value, email:e.target.value}))} className="form-control" placeholder="Enter Your Email" />
            </Form.Group>
        

            
    
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForgot}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmitForgot}>
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

export default  Page;
