import React, { useState } from 'react';
import { Accordion, Card } from "react-bootstrap";

const MockFAQRender = (i) => {
    const [panelStatus, setPanelStatus] = useState();
  
    return (
      <Card className="faq__content-panel">
        <Accordion.Toggle
          className="faq__content-panel-header border-bottom-0"
          onClick={(e) => setPanelStatus(!panelStatus)}
          as={Card.Header}
          eventKey={i}
        >
          <div className="d-flex align-items-center">
            <span className={`faq__content-panel-status`}>
              <strong>{panelStatus ? '✖': '✚'}</strong>
            </span>
            <p className="faq__question">Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse?</p>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse className eventKey={i}>
          <Card.Body className="faq__content-panel-body">
            <p className="faq__answer">
              Lorem ipsum dolor sit amet, vix amet maluisset eu, ad probo posse
              decore vel, his animal percipitur ex. Facer vitae fuisset vim cu,
              mediocrem assentior his an. Duo et verterem sadipscing
              delicatissimi, an pri alii minimum. Duo ea tempor iriure discere,
              duo ipsum debitis indoctum et, ea esse lucilius usu.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  };

  const contentRender = () =>
  [...new Array(6).keys()].map((item) => (
    <section id={`content-${item + 1}`}>
        <Accordion className="faq__content-item" defaultActiveKey="0">
            <h3 className="faq__content-item-header">{`Content ${item + 1}`}</h3>
            {[...new Array(4).keys()].map((i) => MockFAQRender(i))}
        </Accordion>
    </section>
  ));

export default contentRender;