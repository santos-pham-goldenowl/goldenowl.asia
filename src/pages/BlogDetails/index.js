import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import parse from 'html-react-parser';
import format from 'date-fns/format';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookProvider, Comments, Like } from 'react-facebook';

import Footer from '../../components/Footer';
import BlogHeader from '../../components/BlogHeader';
import LoadingScreen from '../../components/LoadingScreen';
import RelatedBlog from './components/RelatedBlog';

import useMobileWidth from '../../utils/hooks/useMobileWidth';
import readTimeCalculator from '../../utils/readTimeCalculator';
import replaceAllString from '../../utils/replaceAllString';

import { getBlog } from '../../api/blogs';

import { HEADER_DESCRIPTION } from '../../constant';

import './index.sass';
import companyOgLogo from '../../assets/images/GoldenOwlLogo.png';
import fb from '../../assets/images/facebook.svg';
import tw from '../../assets/images/twitter.svg';

const BlogDetails = () => {
  const isMobile = useMobileWidth();

  const blogSlug = window && window.location
    ? window.location.pathname.split('/').slice(-1)[0]
    : '';
  const [blog, setBlog] = useState({});
  const [relatedBlog, setRelatedBlog] = useState([]);
  const [loadStatus, setLoadStatus] = useState('');

  useEffect(() => {
    getBlog(blogSlug)
      .then((res) => {
        const { data, related } = res.data;

        if (data) {
          setBlog({ ...data.data });
          setRelatedBlog([...related.data]);
          setTimeout(() => setLoadStatus('loaded'), 500);
        }
      })
      .catch(() => setTimeout(() => setLoadStatus('no-result'), 500));
  }, [blogSlug]);

  switch (loadStatus) {
    case 'loaded':
      return (
        <section className="blog-details">
          <Helmet>
            <title />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <meta content={HEADER_DESCRIPTION} name="description" />
            <meta
              content="Golden Owl - Ruby on Rails, NodeJS, ReactJS and React Native"
              property="og:title"
            />
            <meta content={HEADER_DESCRIPTION} property="og:description" />
            <meta content={companyOgLogo} property="og:image" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="TdCfVtfoL4PbYbE7oJMWiiM/8pGrMTiGoHOSDR5SnWS76hsk9b6nMmeMSr8my4ILM288ym8oPwbE1dLlwuogbg=="
            />
          </Helmet>
          <div className="container-fluid no-padding">
            <BlogHeader />
            <section className="blog-details__body">
              <div className="row">
                <div
                  className={`col-md-3 blog-details__left-side ${
                    isMobile ? 'd-none' : ''
                  }`}
                >
                  <Link to="/blog">BACK TO BLOG</Link>
                </div>
                <div className="col-md-6">
                  <div className="blog-details__title">
                    <div className="category d-flex">
                      <p className="text-uppercase">{blog.type}</p>
                      <p className="text-uppercase">
                        {format(
                          new Date(blog.attributes.created_at),
                          'MMM d, y',
                        )}
                      </p>
                      <p className="text-uppercase">
                        {readTimeCalculator(blog.attributes.content)}
                      </p>
                    </div>
                    <h1>{blog.attributes.title}</h1>
                  </div>
                  <div className="blog-details__center-content">
                    {parse(
                      replaceAllString(blog.attributes.content, {
                        '<div>': '<p>',
                        '</div>': '</p>',
                      }),
                    )}
                  </div>
                </div>
                <div
                  className={`col-md-3 blog-details__right-side d-flex flex-column justify-content-start ${
                    !isMobile && 'text-right'
                  }`}
                >
                  {/* <p className="blog-details__source">
                    SOURCE
                    <br />
                    <strong>{blog.attributes.source}</strong>
                  </p>
                  <hr /> */}
                  <p className="blog-details__share">
                    SHARE THIS POST
                    <br />
                    <div id="social-icons" className="d-flex">
                      <FacebookShareButton
                        hashtag="#GoldenOwlConsulting"
                        className={!isMobile && 'ml-auto'}
                        url={window.location.href}
                      >
                        <img
                          src={fb}
                          alt="GO-facebook-share"
                          id="facebook-sharing"
                        />
                      </FacebookShareButton>
                      <TwitterShareButton
                        hashtags={['GoldenOwlConsulting']}
                        url={window.location.href}
                      >
                        <img
                          src={tw}
                          alt="GO-twitter-share"
                          id="twitter-sharing"
                        />
                      </TwitterShareButton>
                    </div>
                  </p>
                </div>
              </div>
            </section>
            <section className="related-blogs">
              <ul className="row">
                {relatedBlog.map((r) => (
                  <RelatedBlog content={r} />
                ))}
              </ul>
              <br />
              <br />
              <FacebookProvider appId="157910032524691">
                <Like href={window.location} colorScheme="dark" mobile />
                <Comments
                  href={window.location}
                  showFaces
                  mobile
                  orderBy="reverse_time"
                />
              </FacebookProvider>
            </section>

            <Footer />
          </div>
        </section>
      );
    case 'no-result':
      return <Redirect to="/not-found" />;
    default:
      return <LoadingScreen />;
  }
};

export default BlogDetails;
