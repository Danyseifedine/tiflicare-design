import DefaultButton from "../../button/Button";
import "./SecondSection.css";

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side content */}
          <div className="col-lg-7 content-left">
            <h2 className="title">
              A Leading Childcare
              <br />
              <span className="special-text">Management Platform</span>
            </h2>

            <p className="description">
              Easily manage every part of your child care business with
              Tflicare. Our platform helps you automate billing and invoicing,
              effectively manage staff, communicate with families, and give
              teachers control of the classroom with one, easy-to-use system.
            </p>

            <div className="demo-button-desktop">
              <DefaultButton text="Get Free Demo" contained={true} />
            </div>
          </div>
          {/* Right side image */}
          {/* Decorative elements */}
          <div className="yellow-circle">
            <img src="/public/images/yellow-point.svg" alt="" />
          </div>
          <div className="purple-circle">
            <img src="/public/images/purple-point.svg" alt="" />
          </div>
          <div className="red-circle">
            <img src="/public/images/right-point.svg" alt="" />
          </div>
          <div className="col-lg-5 img-sec">
            <div className="image-container">
              <img
                src="/images/second-section-img-laptop.svg"
                alt="Platform Interface Preview"
                className="main-image"
              />
              <img
                src="/images/second-section-img-mobile.svg"
                alt="Platform Interface Preview"
                className="main-image-mobile img-mobile-sec"
              />
            </div>
            <div className="demo-button-mobile mt-4">
              <DefaultButton text="Get Free Demo" contained={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
