import React from 'react';
import {
  Accordion,
} from 'react-accessible-accordion';
import AccordionRender from './Accordion';


const contentRender = () => [...new Array(6).keys()].map((item) => (
  <section id={`content-${item + 1}`}>
    <Accordion className="faq__content-item">
      <h3 className="faq__content-item-header">{`Content ${item + 1}`}</h3>
      <AccordionRender />
    </Accordion>
  </section>
));


export default contentRender;
