import React from "react";
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer";
import TechnologyDescription from "./components/TechnologyDescription";
import TechnologyCards from "./components/TechnologyCards";
import Home from "../../components/BreadCrumb";
import TechnologyDetail from "./components/TechnologyDetail";
import Guarantee from "./components/Guarantee";

import "./index.sass";

const TechnologyContainer = () => (
  <section className="technology-container">
    <div className="container-fluid no-padding">
      <MainHeader />
      <SubHeader />
      <Home>
        <p>Technology</p>
      </Home>
      <TechnologyDescription />
      <Guarantee />
      <TechnologyDetail />
      <TechnologyCards />
      <Footer />
    </div>
  </section>
);

export default TechnologyContainer;
