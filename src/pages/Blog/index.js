import React from 'react'

import MainHeader from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import blogContent from '../../utils/blogContent'
import objectToArray from '../../utils/objectToArray'

import './index.sass'

const Blog = () => (
  <section className="blog">
    <div className="container-fluid no-padding">
      <MainHeader />
      <SubHeader />
      <BreadCrumb>
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
                      <div className="col-md-8 d-flex">
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
                )
              case 1:
              case 2:
              case 3:
                return (
                  <div key={blog.key} className="col-md-4">
                    <div className="blogs__item">
                      <div className="d-flex">
                        <img
                          loading="lazy"
                          className="blogs__item-image"
                          src="https://picsum.photos/815/425"
                          alt="pic-big"
                        />
                      </div>
                      <div className="d-block">
                        <div className="category category-vertical d-flex">
                          <p>BLOG & MAGAZINE </p>
                          <p>JAN 31, 2020</p>
                          <p>10 MIN READ</p>
                        </div>
                        <h4>{blog.key}</h4>
                        <p>{blog.content}</p>
                      </div>
                    </div>
                  </div>
                )
              case 4:
              case 5:
                return (
                  <div key={blog.key} className="col-md-6">
                    <div className="blogs__item">
                      <div className="d-flex">
                        <img
                          loading="lazy"
                          className="blogs__item-image"
                          src="https://picsum.photos/815/425"
                          alt="pic-big"
                        />
                      </div>
                      <div className="d-block">
                        <div className="category category-vertical d-flex">
                          <p>BLOG & MAGAZINE </p>
                          <p>JAN 31, 2020</p>
                          <p>10 MIN READ</p>
                        </div>
                        <h4>{blog.key}</h4>
                        <p>{blog.content}</p>
                      </div>
                    </div>
                  </div>
                )
              default:
                break
            }
            return <div />
          })}
        </div>
      </section>
      <Footer />
    </div>
  </section>
)

export default Blog
