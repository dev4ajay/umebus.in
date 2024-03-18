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
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Q.1 Can I track the location of my booked bus online?
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Yes, you can track your bus online by using our bus tracking app feature called &quot;Track My Bus&quot;. This feature allows passengers and their families to track the live bus location. You may follow your bus on a map and use the information to plan your trip to the boarding point and to get off at the correct stop. Family and friends may also check the bus position to plan pick-ups and ensure your safety.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Q.2 Can I track the location of my booked bus online?
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Yes, you can track your bus online by using our bus tracking app feature called &quot;Track My Bus&quot;. This feature allows passengers and their families to track the live bus location. You may follow your bus on a map and use the information to plan your trip to the boarding point and to get off at the correct stop. Family and friends may also check the bus position to plan pick-ups and ensure your safety.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Q.3 Can I track the location of my booked bus online?
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Yes, you can track your bus online by using our bus tracking app feature called &quot;Track My Bus&quot;. This feature allows passengers and their families to track the live bus location. You may follow your bus on a map and use the information to plan your trip to the boarding point and to get off at the correct stop. Family and friends may also check the bus position to plan pick-ups and ensure your safety.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Q.4 Can I track the location of my booked bus online?
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Yes, you can track your bus online by using our bus tracking app feature called &quot;Track My Bus&quot;. This feature allows passengers and their families to track the live bus location. You may follow your bus on a map and use the information to plan your trip to the boarding point and to get off at the correct stop. Family and friends may also check the bus position to plan pick-ups and ensure your safety.
                            </p>
                        </AccordionDetails>
                    </Accordion>
    </div>

</div>






  </section>
  )
}

export default page;
