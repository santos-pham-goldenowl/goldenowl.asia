import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/go.png";
import desktopLogo from "../../assets/images/golden_owl.svg";
import companyName from "../../assets/images/golden_owl_text.png";
import useMobileWidth from "../../utils/hooks/useMobileWidth";

import "./index.sass";

const BlogHeader = () => {
  const isMobile = useMobileWidth();

  return isMobile ? (
    <header className="blog-header d-flex align-items-center">
      <Link to="/blog">
        <div className="d-flex">
          <img className="blog-header__logo" src={logo} alt="go-logo" />
          <div className="blog-header__logo-text flex-column">
            <img src={companyName} alt="go" />
            <p className="mt-auto">Blog</p>
          </div>
        </div>
      </Link>
      <button className="blog-header__subcribe-button ml-auto">
        Subcribe to our blog
      </button>
    </header>
  ) : (
    <header className="blog-header d-flex align-items-center">
      <Link to="/blog">
        <div className="d-flex align-items-center">
          <img src={desktopLogo} className="blog-header__logo d-block" />
          <p className="">Blog</p>
        </div>
      </Link>
     <button className="blog-header__subcribe-button ml-auto">
        Subcribe to our blog
      </button>
    </header>
  );
};

export default BlogHeader;
