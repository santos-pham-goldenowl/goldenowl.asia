import React, { useState } from 'react';
import { Card} from 'react-bootstrap';
import Accordion from './Accordion';
//import Card from './Card';
  const content = [
    {
      question: 'Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse?',
      answer: ` Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse
      decore vel, his animal percipitur ex. Facer vitae fuisset vim cu,
      mediocrem assentior his an. Duo et verterem sadipscing
      delicatissimi, an pri alii minimum. Duo ea tempor iriure discere,
      duo ipsum debitis indoctum et, ea esse lucilius usu.`
    },
    {
      question: 'Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse?',
      answer: ` Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse
      decore vel, his animal percipitur ex. Facer vitae fuisset vim cu,
      mediocrem assentior his an. Duo et verterem sadipscing
      delicatissimi, an pri alii minimum. Duo ea tempor iriure discere,
      duo ipsum debitis indoctum et, ea esse lucilius usu.`
     },
     {
      question: 'Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse?',
      answer: ` Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse
      decore vel, his animal percipitur ex. Facer vitae fuisset vim cu,
      mediocrem assentior his an. Duo et verterem sadipscing
      delicatissimi, an pri alii minimum. Duo ea tempor iriure discere,
      duo ipsum debitis indoctum et, ea esse lucilius usu.`
    },
    {
      question: 'Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse?',
      answer: ` Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse
      decore vel, his animal percipitur ex. Facer vitae fuisset vim cu,
      mediocrem assentior his an. Duo et verterem sadipscing
      delicatissimi, an pri alii minimum. Duo ea tempor iriure discere,
      duo ipsum debitis indoctum et, ea esse lucilius usu.`
     },
  ];
  export default function ContentRender() {
    const [activeEventKey, setActiveEventKey] = useState(-1);
    return (
      [...new Array(6).keys()].map((item) =>(
         <section id={`content-${item + 1}`}>
         <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey} className="faq__content-item ">
         <h3 className="faq__content-item-header">{`Content ${item + 1}`}</h3>
          {content.map(({ question, answer }, index) => (
            <Card key={index} className="faq__content-panel accordion">
              <Accordion.Toggle element={Card.Header} eventKey={index} className="faq__content-panel-header border-bottom-0">
              <div className="d-flex align-items-center">
           <span className={`faq__content-panel-status`}>
               <strong>{activeEventKey !== index ? '✚': '✖'}</strong>
             </span>
             <p className="faq__question">{question}</p>
           </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index}>
              <Card.Body className="faq__content-panel-body">
             <p className="faq__answer">
              {answer}
             </p>
           </Card.Body>
            </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
     </section>
      ))
);
}
