import { Card } from "@mui/material";
import "./Testimonials.css";
import React from "react";
import DefaultButton from "../button/Button";
function Testimonials() {
  return (
    <div>
      <CardsSection />
      <RedSection />
    </div>
  );
}

export default Testimonials;

function CardsSection() {
  const cards = Array.from({ length: 6 });

  return (
    <div className="text-center c1 mt-0 pt-5 mb-0 pb-4">
      <div className="title-container title-small-container col-sm-12 ">
        <h1 className="huge-font fw-bold">Trusted By</h1>
        <h1 className="huge-font fw-bold">
          <span className="special-text management-system">
            9,000 other settings
          </span>
        </h1>
      </div>{" "}
      <div className="container-fluid mt-md-5 pb-5">
        {cards.map((_, index) => (
          <React.Fragment key={index}>
            <div className='row d-flex justify-content-center'>
              <div className=" col-sm-12 col-md-5">
                <Card variant="outlined" className="testimonialscarddesign mt-3 mt-md-0">
                  <div className="row">
                    <div className="col-1">
                      <svg
                        width="30"
                        height="22"
                        viewBox="0 0 30 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.66667 0C2.69421 0 1.76157 0.386308 1.07394 1.07394C0.386308 1.76157 0 2.69421 0 3.66667V9.16667C0 10.1391 0.386308 11.0718 1.07394 11.7594C1.76157 12.447 2.69421 12.8333 3.66667 12.8333H9.16667C9.16667 14.292 8.5872 15.691 7.55575 16.7224C6.5243 17.7539 5.12536 18.3333 3.66667 18.3333H1.83333C1.3471 18.3333 0.880788 18.5265 0.536971 18.8703C0.193155 19.2141 0 19.6804 0 20.1667C0 20.6529 0.193155 21.1192 0.536971 21.463C0.880788 21.8068 1.3471 22 1.83333 22H3.66667C6.09782 22 8.4294 21.0342 10.1485 19.3151C11.8676 17.5961 12.8333 15.2645 12.8333 12.8333V3.66667C12.8333 2.69421 12.447 1.76157 11.7594 1.07394C11.0718 0.386308 10.1391 0 9.16667 0H3.66667ZM20.1667 0C19.1942 0 18.2616 0.386308 17.5739 1.07394C16.8863 1.76157 16.5 2.69421 16.5 3.66667V9.16667C16.5 10.1391 16.8863 11.0718 17.5739 11.7594C18.2616 12.447 19.1942 12.8333 20.1667 12.8333H25.6667C25.6667 14.292 25.0872 15.691 24.0558 16.7224C23.0243 17.7539 21.6254 18.3333 20.1667 18.3333H18.3333C17.8471 18.3333 17.3808 18.5265 17.037 18.8703C16.6932 19.2141 16.5 19.6804 16.5 20.1667C16.5 20.6529 16.6932 21.1192 17.037 21.463C17.3808 21.8068 17.8471 22 18.3333 22H20.1667C22.5978 22 24.9294 21.0342 26.6485 19.3151C28.3676 17.5961 29.3333 15.2645 29.3333 12.8333V3.66667C29.3333 2.69421 28.947 1.76157 28.2594 1.07394C27.5718 0.386308 26.6391 0 25.6667 0H20.1667Z"
                          fill="#FF4B26"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <p className="fs-6 mb-0">
                        Sollicitudin lectus consequat at est sem. Posuere amet
                        lorem gravida in ac nibh. Adipiscing nunc a urna nisl
                        orci ultrices sagittis scelerisque. Mattis blandit at
                        integer porttitor nunc. Et at curabitur id diam
                        phasellus tellus amet. Donec mattis.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3   profilerow d-flex gap-4">
                    <div className="col-2 col-sm-1 col-md-1">
                      <img
                        src="./../../../public/images/profilepic.png"
                        alt=""
                      />
                    </div>
                    <div className="col-7 col-md-8 personname ">
                      <h6>Jhonas Smith</h6>
                    </div>
                  </div>
                </Card>
              </div>

              <div
                className="col-sm-12 col-md-5 "
              >
                <Card variant="outlined" className="testimonialscarddesign mt-3 mt-xl-4">
                  <div className="row">
                    <div className="col-1">
                      <svg
                        width="30"
                        height="22"
                        viewBox="0 0 30 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.66667 0C2.69421 0 1.76157 0.386308 1.07394 1.07394C0.386308 1.76157 0 2.69421 0 3.66667V9.16667C0 10.1391 0.386308 11.0718 1.07394 11.7594C1.76157 12.447 2.69421 12.8333 3.66667 12.8333H9.16667C9.16667 14.292 8.5872 15.691 7.55575 16.7224C6.5243 17.7539 5.12536 18.3333 3.66667 18.3333H1.83333C1.3471 18.3333 0.880788 18.5265 0.536971 18.8703C0.193155 19.2141 0 19.6804 0 20.1667C0 20.6529 0.193155 21.1192 0.536971 21.463C0.880788 21.8068 1.3471 22 1.83333 22H3.66667C6.09782 22 8.4294 21.0342 10.1485 19.3151C11.8676 17.5961 12.8333 15.2645 12.8333 12.8333V3.66667C12.8333 2.69421 12.447 1.76157 11.7594 1.07394C11.0718 0.386308 10.1391 0 9.16667 0H3.66667ZM20.1667 0C19.1942 0 18.2616 0.386308 17.5739 1.07394C16.8863 1.76157 16.5 2.69421 16.5 3.66667V9.16667C16.5 10.1391 16.8863 11.0718 17.5739 11.7594C18.2616 12.447 19.1942 12.8333 20.1667 12.8333H25.6667C25.6667 14.292 25.0872 15.691 24.0558 16.7224C23.0243 17.7539 21.6254 18.3333 20.1667 18.3333H18.3333C17.8471 18.3333 17.3808 18.5265 17.037 18.8703C16.6932 19.2141 16.5 19.6804 16.5 20.1667C16.5 20.6529 16.6932 21.1192 17.037 21.463C17.3808 21.8068 17.8471 22 18.3333 22H20.1667C22.5978 22 24.9294 21.0342 26.6485 19.3151C28.3676 17.5961 29.3333 15.2645 29.3333 12.8333V3.66667C29.3333 2.69421 28.947 1.76157 28.2594 1.07394C27.5718 0.386308 26.6391 0 25.6667 0H20.1667Z"
                          fill="#FF4B26"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <p className="fs-6 mb-0">
                        Sollicitudin lectus consequat at est sem. Posuere amet
                        lorem gravida in ac nibh. Adipiscing nunc a urna nisl
                        orci ultrices sagittis scelerisque. Mattis blandit at
                        integer porttitor nunc. Et at curabitur id diam
                        phasellus tellus amet. Donec mattis.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3   profilerow d-flex gap-4">
                    <div className="col-2 col-sm-1 col-md-1">
                      <img
                        src="./../../../public/images/profilepic.png"
                        alt=""
                      />
                    </div>
                    <div className="col-7 col-md-8 personname ">
                      <h6>Jhonas Smith</h6>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function RedSection() {
  return (
    <div
      className="small-red-section container-fluid"
      style={{
        textAlign: "center",
        backgroundColor: "#B7173A",
        margin: "auto",
      }}
    >

      <img
        src="/images/right-point.svg"
        className="point-right"
        alt="decorative right pointer"
      />

      <div className="small-red-left-img">
        <img src="/images/small-red-left-img.svg" alt="" />
      </div>
      <div className="row " style={{ textAlign: "center" }}>
        <div className="col-12">
          <h1 className="fs-1 text-light">Get Started with Tiflicare Today</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-3  align-items-center">
        <div
          className=" col-12 col-sm-5 col-md-4  col-lg-2"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DefaultButton
            contained={true}
            text="Request a Demo"
            color="#FCC100"
            textColor="black"
            classe=" fw-normal"

          />
        </div>
      </div>
      <div className="small-red-right-img row">
        <img src="/images/small-red-right-img.svg" alt="" />
      </div>
    </div>
  );
}
