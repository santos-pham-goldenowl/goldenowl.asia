import React from "react";

import useMobileWidth from "../../utils/hooks/useMobileWidth";

import "./index.sass";

const Contact = () => {
  const isMobile = useMobileWidth();
  return (
    <section className="contact">
      <h3>Get in touch via email</h3>
      <a href="mailto:hello@goldenowl.asia">
        <h3 className="text-xl contact__email">hello@goldenowl.asia</h3>
      </a>
      {isMobile ? (
        <p className="contact__phone">
          Or give our friendly team a quick call on <br />{" "}
          <a href="tel:(+84) 2838 4600 98">(+84) 2838 4600 98</a>
        </p>
      ) : (
        <p className="contact__phone">
          Or give our friendly team a quick call on{" "}
          <a href="tel:(+84) 2838 4600 98">(+84) 2838 4600 98</a>
        </p>
      )}
    </section>
  );
};

export default Contact;
