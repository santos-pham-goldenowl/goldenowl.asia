import React from 'react';
import parse from 'html-react-parser';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';
import './style.sass';

export default function AccordionRender({ question, answer }) {
  return (
    <Accordion allowZeroExpanded="true" className="accordion">
      <AccordionItem>
        <AccordionItemHeading className="d-flex align-items-center">
          <AccordionItemButton>
            {question}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            {parse(answer)}
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
