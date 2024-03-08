import React from 'react'
import Image from 'next/image';
import { FcApproval } from "react-icons/fc";
import ImageMobile from "../../image/mobiles-removebg-preview.png"
import Img1 from "../../image/install-andriod-app.jpg"
import Img2 from "../../image/app-rating-20230824.png"
import Img3 from "../../image/install-ios-app.jpg"
const page = () => {
  return (
    <section className="umebus-app mt-4 mb-2">
    <div className='container'>
      <div className='row'>
<div className='col-lg-6 mt-3 mb-2'>
<Image src={ImageMobile} className="mobile-img" alt='' />
</div>
<div className='col-lg-6 mt-5 mb-2'>
<div>
    <h2 >Make Your Travel Memorable 
Install AbhiBus App</h2>

</div>

<div className="row">
<div className="col-6 mt-3 mb-2">
  <div className="d-flex gap-1">
<FcApproval className='approved'/>
<h6>Get Notified</h6>
<div>
</div>
</div>
<p>When the bus starts and is 
about to reach you.</p>

</div>
<div className="col-6 mt-3 mb-2">
<div className="d-flex gap-1">
<FcApproval className='approved'/>
<h6>Lightning Fast</h6>
</div>
<p>Book in 30 secondseven on Low Network.</p>

</div>

</div>
<div className="row mt-4 mb-2">
<div className="col-6">
<div className="d-flex gap-1">
<FcApproval className='approved'/>
<h6>Trusted by Millions</h6>
</div>
<p>Over 200,000 reviewsfrom our customers.</p>

</div>
<div className="col-6">
    <div className="d-flex gap-1">
<FcApproval className='approved'/>
<h6>Enjoy Other Stuff</h6>
</div>
<p>Games, offers, Free Ridesand a lot more.</p>

</div>

</div>
<div className='row mt-5 mb-2'>
  <div className="col-lg-3">
    <h6>Available on</h6>
  <Image src={Img3}  alt='' />
  </div>
  <div className="col-lg-3 mt-4">
<Image src={Img1}  alt='' />
  </div>
  <div className="col-lg-6">
  <Image src={Img2}  alt='' />
  <p>4.6/5 based on 210260 reviews
Trusted by 5+ Crores Travellers</p>
  </div>
</div>
</div>
      </div>
    </div>
    </section>
  )
}

export default page
