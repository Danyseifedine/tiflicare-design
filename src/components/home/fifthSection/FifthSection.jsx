import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fifthSection.css";

const FifthSection = () => {
  const SampleNextArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow next" onClick={onClick}>
        <img src="/images/arrow-right.svg" alt="Next" />
      </button>
    );
  };

  const SamplePrevArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow prev" onClick={onClick}>
        <img src="/images/arrow-left.svg" alt="Previous" />
      </button>
    );
  };

  SampleNextArrow.propTypes = {
    onClick: PropTypes.func,
  };

  SamplePrevArrow.propTypes = {
    onClick: PropTypes.func,
  };

  const testimonials = [
    {
      text: "Eu tortor viverra nec ut eget. Enim in nulla erat massa leo lacus. Nisl tortor praesent viverra at sed purus orci nulla vivamus. Faucibus egestas integer nunc vel. Dignissim sollicitudin et sit facilisis.",
      author: "Jonas Smith",
      image: "/public/images/profilepic.png",
    },
    {
      text: "Eu tortor viverra nec ut eget. Enim in nulla erat massa leo lacus. Nisl tortor praesent viverra at sed purus orci nulla vivamus. Faucibus egestas integer nunc vel. Dignissim sollicitudin et sit facilisis.",
      author: "Iren Watt",
      image: "/public/images/profilepic.png",
    },
    {
      text: "Eu tortor viverra nec ut eget. Enim in nulla erat massa leo lacus. Nisl tortor praesent viverra at sed purus orci nulla vivamus. Faucibus egestas integer nunc vel. Dignissim sollicitudin et sit facilisis.",
      author: "Jonas Smith",
      image: "/public/images/profilepic.png",
    },
    {
      text: "Eu tortor viverra nec ut eget. Enim in nulla erat massa leo lacus. Nisl tortor praesent viverra at sed purus orci nulla vivamus. Faucibus egestas integer nunc vel. Dignissim sollicitudin et sit facilisis.",
      author: "Iren Watt",
      image: "/public/images/profilepic.png",
    },
    {
      text: "Eu tortor viverra nec ut eget. Enim in nulla erat massa leo lacus. Nisl tortor praesent viverra at sed purus orci nulla vivamus. Faucibus egestas integer nunc vel. Dignissim sollicitudin et sit facilisis.",
      author: "Jonas Smith",
      image: "/public/images/profilepic.png",
    },
    {
      text: "Eu tortor viverra nec ut eget. Enim in nulla erat massa leo lacus. Nisl tortor praesent viverra at sed purus orci nulla vivamus. Faucibus egestas integer nunc vel. Dignissim sollicitudin et sit facilisis.",
      author: "Iren Watt",
      image: "/public/images/profilepic.png",
    },
  ];

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // Removed default arrows
    beforeChange: (current, next) => setCurrentSlide(next),
    onInit: () => {
      setSlideCount(testimonials.length);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= slideCount - settings.slidesToShow;

  const handlePrevClick = () => {
    if (!isFirstSlide) {
      sliderRef.current?.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (!isLastSlide) {
      sliderRef.current?.slickNext();
    }
  };

  return (
    <section className="fifth-section">
      <div className="decoration-circle orange"></div>
      <Container>
        <div className="section-header">
          <div className="title-navigation">
            <div className="title-wrapper">
              <h2 className="huge-font fw-bold">
                Hear From
                <span className="highlight special-text">
                  Educators & Parents
                </span>
              </h2>
              <h2 className="highlight-mobile">
                <span className="highlight-mobile-text special-text">Educators</span>
                <span className="highlight-mobile-text special-text"> & Parents</span>
              </h2>
              <h3 className="subtitle">Who Love Tiflicare</h3>
            </div>
            <div className="navigation-arrows">
              <button
                className={`nav-arrow prev-arrow ${
                  isFirstSlide ? "disabled" : ""
                }`}
                onClick={handlePrevClick}
                disabled={isFirstSlide}
                aria-label="Previous slide"
              >
                <img src="/public/images/arrow-left.svg" alt="" />
              </button>
              <button
                className={`nav-arrow next-arrow ${
                  isLastSlide ? "disabled" : ""
                }`}
                onClick={handleNextClick}
                disabled={isLastSlide}
                aria-label="Next slide"
              >
                <img src="/public/images/arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="testimonials-carousel">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <img src="/public/images/quotes-tes.svg" alt="" />
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="author-info">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="author-image"
                    />
                    <span className="author-name">{testimonial.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
      <div className="decoration-circle purple"></div>
    </section>
  );
};

export default FifthSection;
