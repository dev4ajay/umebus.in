"use client"
import React from 'react'
import Image from 'next/image'
import Img  from  "../../image/Screenshot_2024-02-27_125249-removebg-preview.png"
import Img2 from  "../../image/Screenshot_2024-02-27_125258-removebg-preview.png"
import Img3 from  "../../image/Screenshot_2024-02-27_125305-removebg-preview.png"
import Img4 from "../../image/Screenshot_2024-02-27_125312-removebg-preview.png"

const page = () => {
  return (
    <section className='umebus'>  
          <div className="container">
            <div className="border mb-3">
            <div className="d-flex justify-center mt-5 mb-2">
            <span className='logo-heading'>UME</span><span className="heading-span">BUS</span>
            </div>
      <div className="row">
        <div className="col-lg-3 box-umebus">
<div className="boxes  mt-5 mb-2">
    <Image src={Img} alt="box-img" 

style={{
  margin: "auto",
}}/>
    <h6 className='text-blue-900 font-semibold text-center'>Upto 150% Refund</h6>
    <p className='text-dark font-semibold text-center'>On Bus Cancellation</p>
        </div>
      </div>
      <div className="col-lg-3 box-umebus">
<div className="boxes  mt-5 mb-2">
    <Image src={Img} alt="box-img" 

style={{
  margin: "auto",
}}/>
    <h6 className='text-blue-900 font-semibold text-center'>Upto 150% Refund</h6>
    <p className='text-dark font-semibold text-center'>On Bus Cancellation</p>
        </div>
      </div>
      <div className="col-lg-3 box-umebus">
<div className="boxes  mt-5 mb-2">
    <Image src={Img} alt="box-img" 

style={{
  margin: "auto",
}}/>
    <h6 className='text-blue-900 font-semibold text-center'>Upto 150% Refund</h6>
    <p className='text-dark font-semibold text-center'>On Bus Cancellation</p>
        </div>
      </div>
      <div className="col-lg-3 box-umebus ">
<div className="boxes mt-5 mb-2">
    <Image src={Img} alt="box-img" 

style={{
  margin: "auto",
}}/>
    <h6 className='text-blue-900 font-semibold text-center'>Upto 150% Refund</h6>
    <p className='text-dark font-semibold text-center'>On Bus Cancellation</p>
        </div>
      </div>
    </div>
    <div className="more-btn">
      <button className='btns '> Know more </button>
      </div>
      </div>
    </div>
    </section>

  )
}

export default page
