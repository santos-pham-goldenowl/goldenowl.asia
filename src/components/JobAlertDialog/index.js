import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { subcribe } from "../../api/subcribe"

import desktopLogo from "../../assets/images/golden_owl.svg";
import dialog from "../../assets/images/dialog.png";
import "./index.sass";

const JobAlertDialog = (props) => {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmitClick = () => {
    validateEmail(email) ? 
    subcribe({ email, type: 'job' }).then(
      res => {
        props.onHide();
      }
    ).catch(err => alert(err))
    : alert('Invalid email!')
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
          <img src={desktopLogo} className="job-dialog__logo" alt="go-logo" />
      </Modal.Header>
      <Modal.Body>
          <div className="job-dialog__content">
              <div className="row">
                  <div className="offset-lg-3 offset-md-2 col-md-8 col-lg-6 text-center">
                    <img src={dialog} alt="go-mail" className="w-50" />
                    <h3>Subscribe to get Job alerts</h3>
                    <p>Stay up to date! Get all the latest jobs<br/>delivered straight to your inbox</p>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="job-dialog__input-wrapper">
                          <input placeholder="Your email" onBlur={e => setEmail(e.target.value)} className="w-100 mb-0" />
                        </div>
                      </div>
                      <div className="col-lg-4 pl-lg-0 mt-lg-0 mt-3 d-flex">
                        <div className="job-dialog__input-wrapper w-100">
                          <button onClick={onSubmitClick} className="mr-auto w-100 d-block job-dialog__button">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </Modal.Body>
    </Modal>
  );
};

export default JobAlertDialog;
