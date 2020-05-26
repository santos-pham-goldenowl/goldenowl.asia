import React, { useState } from "react";

import { subcribe } from "../../api/subcribe"

import desktopLogo from "../../assets/images/golden_owl.svg";
import dialog from "../../assets/images/dialog.png";
import "./index.sass";

const BlogSubcriptionDialog = (props) => {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmitClick = () => {
    validateEmail(email) ? 
    subcribe({ email, type: 'career' }).then(
      res => {
        props.onHide();
      }
    ).catch(err => alert(err))
    : alert('Invalid email!')
  }
  return (
    <div className={`job-dialog ${props.show ? "" : "d-none"}`}>
      <div className="job-dialog__header">
        <img src={desktopLogo} className="job-dialog__logo" alt="go-logo" />
        <span className="job-dialog__header-button ml-auto" onClick={props.onHide}>&#10005;</span>
      </div>
      <div className="job-dialog__content">
        <div className="row">
            <div className="offset-lg-4 col-lg-4 offset-md-3 col-md-6 text-center">
              <img src={dialog} alt="go-mail" className="w-50" />
              <h3>Subscribe to get Job alerts</h3>
              <p>Stay up to date! Get all the latest jobs<br/>delivered straight to your inbox</p>
              <div className="row">
                <div className="col-md-8">
                  <div className="job-dialog__input-wrapper">
                    <input placeholder="Your email" onBlur={e => setEmail(e.target.value)} className="w-100 mb-0" />
                  </div>
                </div>
                <div className="d-flex flex-grow-1 job-dialog__button-wrapper">
                  <button onClick={onSubmitClick} className="mr-auto w-100 blog-dialog__button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSubcriptionDialog;
