import React from 'react';

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

export default function AccordionRender() {
  return (
    <Accordion allowZeroExpanded="true" className="accordion">
      <AccordionItem>
        <AccordionItemHeading className="d-flex align-items-center">
          <AccordionItemButton>
            Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse
            decore vel, his animal percipitur ex. Facer vitae fuisset vim cu,
            mediocrem assentior his an. Duo et verterem sadipscing
            delicatissimi, an pri alii minimum. Duo ea tempor iriure discere,
            duo ipsum debitis indoctum et, ea esse lucilius usu.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse
            decore vel, his animal percipitur ex. Facer vitae fuisset vim cu,
            mediocrem assentior his an. Duo et verterem sadipscing
            delicatissimi, an pri alii minimum. Duo ea tempor iriure discere,
            duo ipsum debitis indoctum et, ea esse lucilius usu.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="faq__answer">
            Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse
            decore vel, his animal percipitur ex. Facer vitae fuisset vim cu,
            mediocrem assentior his an. Duo et verterem sadipscing
            delicatissimi, an pri alii minimum. Duo ea tempor iriure discere,
            duo ipsum debitis indoctum et, ea esse lucilius usu.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse
            decore vel, his animal percipitur ex. Facer vitae fuisset vim cu,
            mediocrem assentior his an. Duo et verterem sadipscing
            delicatissimi, an pri alii minimum. Duo ea tempor iriure discere,
            duo ipsum debitis indoctum et, ea esse lucilius usu.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
