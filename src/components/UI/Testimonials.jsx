import React from "react";
import Slider from "react-slick";
import "../../components/styles/testimonials.css";

import ava01 from "../../components/images/ava-1.jpg";
import ava02 from "../../components/images/ava-2.jpg";
import ava03 from "../../components/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    Speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than
            <span className="highlight">5,000 customers</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores sequi, laboriosam expedita maxime porro quisquam
                accusantium maiores in amet quasi, sint, culpa dolorem
                doloremque quaerat commodi fugiat rem? Eaque dignissimos sunt
                voluptatem omnis, molestiae ipsa fuga dicta doloremque quae!
                Consequuntur.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Jhon Doe</h5>
                  <p className="description">CEO, Work Creation</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores sequi, laboriosam expedita maxime porro quisquam
                accusantium maiores in amet quasi, sint, culpa dolorem
                doloremque quaerat commodi fugiat rem? Eaque dignissimos sunt
                voluptatem omnis, molestiae ipsa fuga dicta doloremque quae!
                Consequuntur.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava02} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Melissa Stuart</h5>
                  <p className="description">Software Developer</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores sequi, laboriosam expedita maxime porro quisquam
                accusantium maiores in amet quasi, sint, culpa dolorem
                doloremque quaerat commodi fugiat rem? Eaque dignissimos sunt
                voluptatem omnis, molestiae ipsa fuga dicta doloremque quae!
                Consequuntur.
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava03} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Brad Henderson</h5>
                  <p className="description">Sr. Product designer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
