import { Container } from "react-bootstrap";
import "./fourthSection.css";

export default function FourthSection() {
  return (
    <section className="fourth-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="huge-font fw-bold mb-5">
            Why <span className="special-text">Tflicare?</span>
          </h2>
          <div className="carousel-container">
            <div className="carousel-item-1">
              <img src="/public/images/fourth-icon-1.svg" className="mb-3 first-icon" alt="" />
              <p className="mb-0 first-text">Intuitive Design</p>
            </div>
            <div className="carousel-item-2">
              <img src="/public/images/fourth-icon-2.svg" className="mb-3 second-icon" alt="" />
              <p className="mb-0 second-text">Comprehensive Tools</p>
            </div>
            <div className="carousel-item-3">
              <img src="/public/images/fourth-icon-3.svg" className="mb-3 third-icon" alt="" />
              <p className="mb-0 third-text">Data Security</p>
            </div>
            <div className="carousel-item-4">
              <img src="/public/images/fourth-icon-4.svg" className="mb-3 fourth-icon" alt="" />
              <p className="mb-0 fourth-text">Save Time and Money</p>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-between">
          <div className="col-md-7">
            <img src="/public/images/second-section-img-mobile.svg" alt="" />
          </div>
          <div className="col-md-5" style={{ maxWidth: '500px' }}>
            <h3 className="feature-title pt-4">Intuitive Design</h3>
            <p className="feature-description">
              Our platform is designed to be user-friendly and easy to navigate, ensuring that you can quickly and easily access the information and tools you need, and easy to navigate, ensuring that you can quickly .
            </p>
          </div>
        </div>
      </Container>
      <div className="background-img-left">
        <img src="/images/background-img-left.svg" alt="" />
      </div>
      <div className="background-img-right">
        <img src="/images/fourth-img.svg" alt="" />
      </div>
      <div className="point">
        <img src="/public/images/yellow-point.svg" alt="" />
      </div>
    </section>
  );
}
