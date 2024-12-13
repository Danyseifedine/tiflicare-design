import DefaultButton from "../../button/Button";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <div className="text-center hero-section">
      <div className="title-container">
        <h1 className="huge-font fw-bold">Finally, A Childcare</h1>
        <h1 className="huge-font fw-bold">
          <span className="special-text-dark management-system">
            Management System
          </span>
          &nbsp; That
        </h1>
        <h1 className="huge-font fw-bold">Makes Sense!</h1>
      </div>

      {/* Alternative title container for very small screens */}
      <div className="title-small-container d-none">
        <h1 className="huge-font fw-bold">Finally, A Childcare</h1>
        <h1 className="huge-font fw-bold">
          <span className="small-line-text-dark">Management</span>
          <br />
          <span className="small-line-text-2">System</span>
          &nbsp; That
        </h1>
        <h1 className="huge-font fw-bold">Makes Sense!</h1>
      </div>

      {/* CTA Buttons */}
      <div className="mt-4 row justify-content-center">
        <img
          src="/images/right-point.svg"
          className="right-point"
          alt="decorative right pointer"
        />
        <img
          src="/images/left-point.svg"
          className="left-point"
          alt="decorative left pointer"
        />

        <div className="col-md-2 col-12 mb-3 mb-md-0">
          <DefaultButton
            className="w-100"
            text="Get Started"
            contained={true}
          />
        </div>
        <div className="col-md-2 col-12">
          <DefaultButton
            className="w-100"
            text="See Pricing"
            contained={false}
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSectionImage() {
  return (
    <div>
      <div
        className="mt-4 section-image-container container-md"
        style={{ marginBottom: "50px" }}
      >
        <img
          src="/images/section-1.svg"
          alt="Childcare Management"
          className="responsive-image pt-12"
          width="30%"
        />
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
      </div>
      <div style={{ paddingBottom: "10px" }}></div>
    </div>
  );
}
