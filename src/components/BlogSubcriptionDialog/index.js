import React from "react";
import { Modal } from "react-bootstrap";

import desktopLogo from "../../assets/images/golden_owl.svg";
import dialog from "../../assets/images/dialog.png";
import "./index.sass";

const BlogSubcriptionDialog = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
          <img src={desktopLogo} className="blog-dialog__logo" alt="go-logo" />
      </Modal.Header>
      <Modal.Body>
          <div className="blog-dialog__content">
              <div className="row">
                  <div className="offset-lg-3 offset-md-2 col-md-8 col-lg-6 text-center">
                    <img src={dialog} alt="go-mail" className="w-50" />
                    <h3>Subscribe to Golden Owl blog</h3>
                    <p>Stay up to date! Get all the latest posts<br/>delivered straight to your inbox</p>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="blog-dialog__input-wrapper">
                          <input placeholder="Your email" className="w-100 mb-0" />
                        </div>
                      </div>
                      <div className="col-lg-4 pl-lg-0 mt-lg-0 mt-3 d-flex">
                        <div className="blog-dialog__input-wrapper w-100">
                          <button className="mr-auto w-100 d-block blog-dialog__button">
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

export default BlogSubcriptionDialog;
