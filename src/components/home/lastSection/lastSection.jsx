import "./lastSection.css";
import DefaultButton from "../../button/Button";

const LastSection = () => {
  return (
    <div className="last-section">
      <div
        className="d-flex align-items-center justify-content-center justify-content-xl-between container flex-column flex-xl-row-reverse flex-wrap flex-xl-nowrap"
      >
        <div className="last-img-right">
          <img
            src="/images/right-point.svg"
            alt="decorative background right"
          />
        </div>

          <div className="img-div d-flex align-items-center">
            <div className="first-img">
              <img
                src="/public/images/firstImage-LastSection.svg"
                alt="decorative background left"
                className="rounded-3"
              />
            </div>
            <div className="second-img">
              <img
                src="/public/images/firstImage-LastSection-2.svg"
                alt="decorative background left"
                className="rounded-3"
              />
            </div>
          </div>

        <div className="text_div centered-sm d-flex justify-content-start flex-column">
          <h1 className="huge-font fw-bold text-white p-0 m-0">
            Are You Ready to{" "}
          </h1>
          <h1 className="huge-font fw-bold text-white p-0 m-0">
            <span className="special-text text-white p-0 m-0">Reimagine</span>{" "}
            Your School?
          </h1>
          <div style={{ marginTop: "30px" }}>
            <DefaultButton
              text="book a demo"
              contained={true}
              classe="py-3 px-5 btn-lg rounded-5 last-btn border-0"
              width="fit-content"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
