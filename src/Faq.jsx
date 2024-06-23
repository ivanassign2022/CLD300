import './css/Faq.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Faq() {
  return (
    <Container maxWidth={false} >

      <Box sx={{ typography: 'h4' }}>FAQ</Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Product Description
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Provide detailed information on the product's specifications, features, materials, etc.</li>
            <li>Include clear product images showcasing different angles and details</li>
            <li>State the product's dimensions, weight, capacity, and other physical attributes</li>
            <li>List the main functions and suitable applications of the product</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Customer Service
        </AccordionSummary>
        <AccordionDetails sx={{ m: -2 }}>
          <ul>
          <li>Provide customer service contact channels, such as hotline and email</li>
          <li>Address common questions and issues, e.g., product returns/exchanges, delivery problems</li>
          <li>Explain the complaint and refund procedures, as well as the response time</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Privacy and Security
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Describe the collection, usage, and protection measures for personal data</li>
            <li>Explain the website's security mechanisms, such as SSL encryption</li>
            <li>Outline the channels for privacy violation complaints</li>
          </ul>
        </AccordionDetails>
        
      </Accordion>
    </Container>
  );
}
