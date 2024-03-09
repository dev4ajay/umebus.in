import React from 'react';

import { FaFacebookSquare  , FaInstagram  , FaTwitter ,FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <section className="main-footer mt-5">
      <div className="container footer-section">
        <div className='row'>
          <div className='col-lg-4'>
            <span className='logo-heading'>UME</span><span className="heading-span">BUS</span>     
            <p className="text-justify">redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</p>
          </div>
          <div className='col-lg-2'>
            <h5 className="font-bold">About redBus</h5>
            <p>About us</p>     
            <p>Investor Relations</p>    
            <p>Contact us</p>    
            <p>Mobile version</p>    
            <p>redBus on mobile</p>    
            <p>Sitemap</p>    
            <p>Offers</p>    
            <p>Career</p>    
          </div>
          <div className='col-lg-2'>
            <h5 className="font-bold">Info</h5>
            <p>T&C</p>     
            <p>Privacy policy</p>    
            <p>FAQ</p>    
            <p>Blog</p>    
            <p>Bus operator registration</p>    
            <p>Agent registration</p>    
            <p>Insurance partner</p>    
            <p>User agreement</p>    
          </div>
          <div className='col-lg-2'>
            <h5 className="font-bold">Global Sites</h5>
            <p>India</p>     
            <p>Singapore</p>    
            <p>Malaysia</p>    
            <p>Indonesia</p>    
            <p>Peru</p>    
            <p>Colombia</p>    
          </div>
          <div className='col-lg-2'>
            <h5 className="font-bold">Our Partners</h5>
            <p>Goibibo Bus</p>     
            <p>Goibibo Hotels</p>    
            <p>Makemytrip Hotels</p>    
          </div>
        </div>
        <hr/>
        <div className="d-flex justify-between">
          <p>Copyright <span className='logo-heading'>UME</span><span className="heading-span">BUS</span> All Rights Reserved</p>
          <div className="d-flex gap-3 fs-3">
            <FaInstagram/>
            <FaFacebookSquare/>
            <FaLinkedin/>
            <FaTwitter/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
