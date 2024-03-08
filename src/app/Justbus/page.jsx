import React from 'react'
import Image from 'next/image'
import Imgicon from "../../image/bus.png"
import Imgbus from "../../image/images-removebg-preview (1).jpg"
import Imgicon1 from "../../image/4.jpg"
import Imgicon2 from "../../image/5.jpg"
import Imgicon3 from "../../image/6.jpg"



const page = () => {
  return (
  <section className="main-just-bus mt-5">

    <div className="container justbus-section ">
<div className='row'>
    <div className='col-lg-6'>
<div>
    <h2>NOW <span className="font-semibold">GET MORE THAN </span> 
<span className="font-semibold"> JUST BUS</span> TICKETS WITH 
REDBUS!</h2>
</div>
<div className="d-flex gap-1">
    <Image src={Imgicon} alt=""/>
    <h6 className="mt-2">Bus Tickets</h6>
</div>
<div>
    <p>Book IRCTC Train Tickets on redRail simple & superfast booking
process with no service fee + no payment gateway charge</p>
</div>
<div className="d-flex gap-1">
    <Image src={Imgicon1} alt=""/>
    <h6 className="mt-2">Authorised IRCTC Partner</h6>
</div>
<div className="d-flex gap-1">
    <Image src={Imgicon2} alt=""/>
    <h6 className="mt-2">Instant refunds on UPI payments</h6>
</div>
<div className="d-flex gap-1">
    <Image src={Imgicon3} alt=""/>
    <h6 className="mt-2">Hassle- free customer support</h6>
</div>
<div className="book-btn">
      <button className='btns '>Book Bus Tickets </button>
      </div>
    </div>

    <div className='col-lg-6 bg-bus '>
    <Image src={Imgbus} className='mt-4 mb-2' alt=""/>
        </div>
     
      </div>
      </div>



  </section>
  )
}

export default page
