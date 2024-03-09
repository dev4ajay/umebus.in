"use client"
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const page = () => {
    
  return (
  <section className="main-faq mt-5">
<div className="container">
<div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
       Q.1 Can I track the location of my booked bus online?
        </AccordionSummary>
        <AccordionDetails>
        Yes, you can track your bus online by using our bus tracking app feature called “Track My Bus”. This feature allows passengers and their families to track the live bus location. You may follow your bus on a map and use the information to plan your trip to the boarding point and to get off at the correct stop. Family and friends may also check the bus position to plan pick-ups and ensure your safety.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon   className="fs-2"/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Q.2 What are the advantages of purchasing a bus ticket with UMEBUS?
        </AccordionSummary>
        <AccordionDetails>
        There are many advantages to purchasing online bus tickets with UMEBUS. UMEBUS is India’s most trusted bus ticket company, where you can book any type of private or Government owned buses. UMEBUS allows you to find the different types of buses, choose the preferred bus seats, and your nearest boarding and dropping points. You can also filter the buses based on timings like morning, evening bus etc. 
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className="fs-2"/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
      Q.3 Why book bus tickets online on UMEBUS?
        </AccordionSummary>
        <AccordionDetails>
        Booking bus tickets online on UMEBUS is increasingly becoming the preferred choice for travelers due to its numerous advantages over traditional methods.With UMEBUS, customers can book their bus tickets effortlessly from the comfort of their homes, avoiding the inconvenience of standing in long lines at bus stations or travel agencies. Online bus booking not only offers the luxury of comparing different bus schedules and operators but also presents various discount offers and exclusive deals, resulting in significant savings.Payment security is another notable feature of online booking, which ensures that your financial information is well-protected against fraud. Additionally, customers get the privilege to pick their seats, providing a customized travel experience. Online bus booking platforms give real-time updates about any changes in the bus timetable, including delays or cancellations, enabling better planning.The convenience doesn't stop here; travelers can even compare onboard amenities like charging points or snacks, further enhancing the travel experience.
        </AccordionDetails>
   
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className="fs-2"/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
      Q.4 What's New in Bus Booking on UMEBUS?
        </AccordionSummary>
        <AccordionDetails>
        Primo Bus Ticket: UMEBUS has launched Primo bus services, where passengers can enjoy traveling in high-rated buses with best-in-class services. While looking for bus tickets on the desired route, customers can check the Primo tag to choose this excellent service. From hygiene standards to on-time service and comfort, passengers can benefit from online bus booking experience from Primo buses.        </AccordionDetails>
   
      </Accordion>
    </div>

</div>






  </section>
  )
}

export default page
