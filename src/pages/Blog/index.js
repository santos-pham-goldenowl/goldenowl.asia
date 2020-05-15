import React, { createRef, useEffect, useState } from "react";
import Helmet from "react-helmet";
import parse from "html-react-parser";

import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import MainHeader from "../../components/MainHeader";
import BreadCrumb from "../../components/BreadCrumb";
import FixedTopBreadCrumb from "../../components/FixedTopBreadCrumb";
import FixedTopHeader from "../../components/FixedTopHeader";

import stickyTrigger from "../../utils/stickyTrigger";
import useScrollDirection from "../../utils/hooks/useScrollDirection";

import { getAllBlogs } from "../../api/blogs";

import "./index.sass";
import { Link } from "react-router-dom";

const Blog = () => {
  const pageContent = createRef();
  const scrollDirection = useScrollDirection();
  const [blogs, setBlogs] = useState([]);

  window.onscroll = () => stickyTrigger(scrollDirection);

  useEffect(() => {
    getAllBlogs()
      .then((res) => {
        const { data } = res.data;
        console.log("Blog -> data", data.data);

        if (data) {
          setBlogs([...data.data]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(blogs);
  return (
    <section className="blog">
      <Helmet>
        <title>Blog - Golden Owl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more."
          name="description"
        />
        <meta
          content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native"
          property="og:title"
        />
        <meta
          content="Golden Owl - We do Ruby on Rails, NodeJS, ReactJS and React Native. We follow Agile &amp; TDD practice and cool softwares like Github, Basecamp, Slack in our daily work to provide best communication and transparency to clients. Our services include web development, mobile development, head hunting and more."
          property="og:description"
        />
        <meta
          content="http://www.goldenowl.asia/assets/background-home.jpg"
          property="og:image"
        />
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
        />
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
            {blogs &&
              blogs.map((blog, index) => {
                switch (index % 6) {
                  case 0:
                    return (
                      <div key={blog.attributes.title} className="col-md-12">
                        <Link exact to={`/blog/details/${blog.id}`}>
                          <div className="row blogs__item">
                            <div className="col-12 col-md-8 d-block">
                              <div
                                style={{
                                  backgroundImage: `url(${blog.attributes.image})`,
                                }}
                                className="blogs__item-image"
                              />
                            </div>
                            <div className="col-md-4 wide-blog">
                              <div className="category d-flex">
                                <p className="text-uppercase">{blog.type}</p>
                                <p className="text-uppercase">JAN 31, 2020</p>
                                <p className="text-uppercase">10 MIN READ</p>
                              </div>
                              <h4>{blog.attributes.title}</h4>
                              <p>{parse(blog.attributes.content)}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  case 1:
                  case 2:
                  case 3:
                    return (
                      <div
                        key={blog.attributes.title}
                        className="col-12 col-md-4"
                      >
                        <Link exact to={`/blog/details/${blog.id}`}>
                          <div className="blogs__item">
                            <div className="d-block">
                              <div
                                style={{
                                  backgroundImage: `url(${blog.attributes.image})`,
                                }}
                                className="blogs__item-image"
                              />
                            </div>
                            <div className="d-block">
                              <div className="category category-vertical-small d-flex">
                                <p>{blog.type}</p>
                                <p>JAN 31, 2020</p>
                                <p>10 MIN READ</p>
                              </div>
                              <h4 className="small-item-title">
                                {blog.attributes.title}
                              </h4>
                              <p>{parse(blog.attributes.content)}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  case 4:
                  case 5:
                    return (
                      <div
                        key={blog.attributes.title}
                        className="col-12 col-md-6"
                      >
                        <Link exact to={`/blog/details/${blog.id}`}>
                          <div className="blogs__item">
                            <div className="d-block">
                              <div
                                style={{
                                  backgroundImage: `url(${blog.attributes.image})`,
                                }}
                                className="blogs__item-image"
                              />
                            </div>
                            <div className="d-block">
                              <div className="category category-vertical-big d-flex">
                                <p>{blog.type}</p>
                                <p>JAN 31, 2020</p>
                                <p>10 MIN READ</p>
                              </div>
                              <h4 className="medium-item-title">
                                {blog.attributes.title}
                              </h4>
                              <p className="medium-item-content">
                                {parse(blog.attributes.content)}
                              </p>
                            </div>
                          </div>
                        </Link>
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
