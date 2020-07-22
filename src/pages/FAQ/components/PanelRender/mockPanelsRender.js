import React, { useState } from 'react';
import parse from 'html-react-parser';

import { Accordion, Card } from 'react-bootstrap';
import Cross from '../Cross';
import Plus from '../Plus';

import objectToArray from '../../../../utils/objectToArray';

const MockFAQRender = ({ eventKey, question, answer }) => {
  const [panelStatus, setPanelStatus] = useState(false);

  return (
    <Card className="faq__content-panel">
      <Accordion.Toggle
        className="faq__content-panel-header border-bottom-0"
        onClick={() => setPanelStatus(!panelStatus)}
        as={Card.Header}
        eventKey={eventKey}
      >
        <div className="d-flex align-items-center">
          <span className="faq__content-panel-status">
            {panelStatus ? <Cross /> : <Plus />}
          </span>
          <p className="faq__question">{question}</p>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse className eventKey={eventKey}>
        <Card.Body className="faq__content-panel-body">
          <p className="faq__answer">
            {parse(answer)}
          </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const contentRender = (content) => objectToArray(content).map((item) => (
  <Accordion className="faq__content-item" id={item.key}>
    <MockFAQRender eventKey={item.key} question={item.q} answer={item.a} />
  </Accordion>
));

export default contentRender;
