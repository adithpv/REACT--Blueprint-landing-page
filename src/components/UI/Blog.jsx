import React from "react";
import "../../components/styles/blog.css";

import videoImg from "../../components/images/video.png";
import articleImg from "../../components/images/article.png";
import caseStudy from "../../components/images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video",
    desc: "To Know about work. Watch some videos",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: "Article",
    desc: "Do you want to improve the way your brand interacts with",
    linkUrl: "#",
  },
  {
    imgUrl: caseStudy,
    title: "Case study",
    desc: "Boost your conversation rate with us",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Our blog</h6>
          <h2>
            Lets have a look from our
            <span className="highlight"> recent blog</span>
          </h2>
        </div>

        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
              <h2>{item.title}</h2>
              <div className="blog__img">
                <img src={item.imgUrl} alt="video" />
              </div>
              <p className="description blog__desc">{item.desc}</p>
              <div>
                <a href={item.linkUrl} className="learn__more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
