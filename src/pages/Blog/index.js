import React, { createRef } from 'react';
import Helmet from 'react-helmet';

import Footer from '../../components/Footer';
import SubHeader from '../../components/SubHeader';
import MainHeader from '../../components/MainHeader';
import BreadCrumb from '../../components/BreadCrumb';
import FixedTopBreadCrumb from '../../components/FixedTopBreadCrumb';
import FixedTopHeader from '../../components/FixedTopHeader';

import blogContent from '../../utils/blogContent';
import objectToArray from '../../utils/objectToArray';
import stickyTrigger from '../../utils/stickyTrigger';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

import './index.sass';

const Blog = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();

  window.onscroll = () => stickyTrigger(scrollDirection);

  return (
    <section className="blog">
      <Helmet>
        <title>Blog - Golden Owl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." name="description" /><meta content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native" property="og:title" />
        <meta content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more." property="og:description" />
        <meta content="http://www.goldenowl.asia/assets/background-home.jpg" property="og:image" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta name="csrf-token" content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg==" />
      </Helmet>
      <div ref={pageContent} className="container-fluid no-padding">
        <FixedTopHeader />
        <FixedTopBreadCrumb pageContent={pageContent}>
          <p>Blog</p>
        </FixedTopBreadCrumb>
        <MainHeader />
        <SubHeader />
        <BreadCrumb pageContent={pageContent}>
          <p>Blog</p>
        </BreadCrumb>
        <section className="welcome">
          <div className="welcome__wrapper">
            <h1>Welcome to the Golden Owl blog</h1>
            <p>Thoughts, stories and ideas.</p>
          </div>
        </section>
        <section className="blogs">
          <div className="row">
            {objectToArray(blogContent).map((blog, index) => {
              switch (index % 6) {
                case 0:
                  return (
                    <div key={blog.key} className="col-md-12">
                      <div className="row blogs__item">
                        <div className="col-12 col-md-8 d-block">
                          <img
                            loading="lazy"
                            className="blogs__item-image"
                            src="https://picsum.photos/815/425"
                            alt="pic-big"
                          />
                        </div>
                        <div className="col-md-4 wide-blog">
                          <div className="category d-flex">
                            <p>BLOG & MAGAZINE </p>
                            <p>JAN 31, 2020</p>
                            <p>10 MIN READ</p>
                          </div>
                          <h4>{blog.key}</h4>
                          <p>{blog.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                case 1:
                case 2:
                case 3:
                  return (
                    <div key={blog.key} className="col-12 col-md-4">
                      <div className="blogs__item">
                        <div className="d-block">
                          <img
                            loading="lazy"
                            className="blogs__item-image"
                            src="https://picsum.photos/815/425"
                            alt="pic-big"
                          />
                        </div>
                        <div className="d-block">
                          <div className="category category-vertical-small d-flex">
                            <p>BLOG & MAGAZINE </p>
                            <p>JAN 31, 2020</p>
                            <p>10 MIN READ</p>
                          </div>
                          <h4 className="small-item-title">{blog.key}</h4>
                          <p>{blog.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                case 4:
                case 5:
                  return (
                    <div key={blog.key} className="col-12 col-md-6">
                      <div className="blogs__item">
                        <div className="d-block">
                          <img
                            loading="lazy"
                            className="blogs__item-image"
                            src="https://picsum.photos/815/425"
                            alt="pic-big"
                          />
                        </div>
                        <div className="d-block">
                          <div className="category category-vertical-big d-flex">
                            <p>BLOG & MAGAZINE </p>
                            <p>JAN 31, 2020</p>
                            <p>10 MIN READ</p>
                          </div>
                          <h4 className="medium-item-title">{blog.key}</h4>
                          <p className="medium-item-content">{blog.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                default:
                  break;
              }
              return <div />;
            })}
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Blog;
