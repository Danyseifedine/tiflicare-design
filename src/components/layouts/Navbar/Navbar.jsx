import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import DefaultButton from "../../button/Button";
import { Link } from "react-router-dom";

export default function NavbarDefault() {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setExpanded(false); // Example: Reset expanded if switching to desktop
    }
  }, [isDesktop]);
  return (
    <div className="container-fluid navbarc1">
      <Navbar
        expand="lg"
        className={`navbar-custom `}
        style={{ backgroundColor: `${expanded ? "white" : ""}` }}
        onToggle={() => setExpanded(!expanded)}
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              className="navbar-logo"
              src="./../../public/logo.png"
              alt="Brand Logo"
              width="117"
              height="70"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggle"
          >
            {expanded ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M10.4695 8.95046L17.7595 1.66046C17.9234 1.46916 18.009 1.22308 17.9993 0.971403C17.9895 0.719727 17.8852 0.480988 17.7071 0.302894C17.529 0.124799 17.2903 0.0204662 17.0386 0.0107451C16.7869 0.00102391 16.5408 0.0866304 16.3495 0.250457L9.05954 7.54046L1.76954 0.240457C1.57824 0.0766302 1.33217 -0.00897537 1.08049 0.000745785C0.828814 0.0104669 0.590075 0.114799 0.411981 0.292893C0.233886 0.470988 0.129554 0.709727 0.119832 0.961403C0.110111 1.21308 0.195718 1.45915 0.359544 1.65046L7.64954 8.95046L0.349544 16.2405C0.244862 16.3301 0.159842 16.4404 0.0998186 16.5645C0.0397953 16.6886 0.00606467 16.8237 0.000745179 16.9614C-0.00457431 17.0991 0.0186316 17.2365 0.0689062 17.3648C0.119181 17.4931 0.195439 17.6097 0.292894 17.7071C0.390349 17.8046 0.506896 17.8808 0.635221 17.9311C0.763546 17.9814 0.900878 18.0046 1.0386 17.9993C1.17632 17.9939 1.31145 17.9602 1.43551 17.9002C1.55958 17.8402 1.6699 17.7551 1.75954 17.6505L9.05954 10.3605L16.3495 17.6505C16.5408 17.8143 16.7869 17.8999 17.0386 17.8902C17.2903 17.8804 17.529 17.7761 17.7071 17.598C17.8852 17.4199 17.9895 17.1812 17.9993 16.9295C18.009 16.6778 17.9234 16.4318 17.7595 16.2405L10.4695 8.95046Z"
                    fill="#A6A6A6"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="22" height="2" rx="1" fill="#674387" />
                <rect y="7" width="22" height="2" rx="1" fill="#674387" />
                <rect
                  x="9"
                  y="14"
                  width="13"
                  height="2"
                  rx="1"
                  fill="#674387"
                />
              </svg>
            )}
          </Navbar.Toggle>

          {expanded && (
            <div className="navbar-divider d-md-none mt-3 mb-5 "></div>
          )}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-auto nav-menu mt-sm-5 mt-lg-0 z-3">
              <NavDropdown title="Solution" id="basic-nav-dropdown" className="z-3">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/aboutus"}>About Us</Nav.Link>
              <Nav.Link as={Link} to={"/pricing"}>Pricing</Nav.Link>
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              <Nav.Link className="col-lg-4 col-sm-0 col-md-0" href="">
                Log In
              </Nav.Link>
              <Nav.Link className="col-12 col-md-10" href="#link">
                <DefaultButton text={"Get A Demo"} contained={true} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
