import "./thirdSection.css";
import { Container, Row, Col } from "react-bootstrap";

export default function ThirdSection() {
  return (
    <section className="third-section">
      <img
        className="background-img-left"
        src="/images/background-img-left.svg"
        alt="decorative background left"
      />
      <img
        className="background-img-right"
        src="/images/background-img-right.svg"
        alt="decorative background right"
      />
      <Container>
        <div className="text-center mb-5">
          <h2 className="huge-font">
            All Your Childcare Management
            <br />
            Needs in <br className="d-none break-mobile"></br><span className="special-text">One Place</span>
          </h2>
        </div>

        <Row className="features-container">
          {/* Automated Billing Card */}
          <Col lg={4} className="feature-card">
            <div className="card-inner">
              <div className="card-image">
                <img
                  src="/public/images/first-img-third-section.svg"
                  alt="Automated Billing"
                  className="feature-img"
                />
              </div>
              <div className="card-content">
                <h3 className="feature-title pt-2">
                  Automated <span className="emoji">💰</span> Billing
                </h3>
                <p className="feature-description">
                  Streamline your billing process with automated invoicing,
                  online payments, and detailed financial reporting.
                </p>
                <img
                  src="/public/images/arrow.svg"
                  className="mt-3"
                  alt="arrow"
                />
              </div>
            </div>
          </Col>

          {/* Staff Management Card */}
          <Col lg={4} className="feature-card">
            <div className="card-inner" style={{ backgroundColor: "#FFFAF1" }}>
              <div className="card-image">
                <img
                  src="/public/images/second-img-third-section.svg"
                  alt="Staff Management"
                  className="feature-img"
                />
              </div>
              <div className="card-content">
                <h3 className="feature-title pt-2">
                  Staff <span className="emoji">👥</span> Management
                </h3>
                <p className="feature-description">
                  Efficiently manage staff schedules, time tracking, and
                  performance monitoring all in one place.
                </p>
                <img
                  src="/public/images/arrow.svg"
                  className="mt-3"
                  alt="arrow"
                />
              </div>
            </div>
          </Col>

          {/* Parent Communication Card */}
          <Col lg={4} className="feature-card">
            <div className="card-inner">
              <div className="card-image">
                <img
                  src="/public/images/third-img-third-section.svg"
                  alt="Parent Communication"
                  className="feature-img"
                />
              </div>
              <div className="card-content">
                <h3 className="feature-title">
                  Parent <span className="emoji">💬</span> Communication
                </h3>
                <p className="feature-description">
                  Keep parents informed and engaged with real-time updates,
                  messaging, and digital daily reports.
                </p>
                <img
                  src="/public/images/arrow.svg"
                  className="mt-3"
                  alt="arrow"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
