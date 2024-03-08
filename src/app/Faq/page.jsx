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
       Q.1 How do you do online bus reservation on AbhiBus?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon   className="fs-2"/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Q.2 How do you do online bus reservation on AbhiBus?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className="fs-2"/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
      Q.3 How do you do online bus reservation on AbhiBus?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
   
      </Accordion>
    </div>

</div>






  </section>
  )
}

export default page
