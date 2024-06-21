import React from "react";
import profile from "../../assets/img/profile_photo.jpeg"
import InformationDiamondIcon from "../../assets/svg/icons/InformationDiamondIcon";
import SearchAreaIcon from "../../assets/svg/icons/SearchAreaIcon";

function IntroSec() {
    return (
        <section id="Introduction" className="gradient-background">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  className="profile_photo d-block mx-lg-auto img-fluid"
                  style={{ minHeight: '350px', minWidth: '350px' }}
                  src={profile}
                  alt="Rishabh Profile Photo"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  <span style={{fontFamily: "Pacifico",color: "#7962bd"}}>Welcome</span>...
                </h1>
                <p className="lead">
                Hello! <span style={{fontWeight: "bold"}}>I'm Rishabh Gokhe</span>, a passionate full stack developer, 3D modeling, and UI design. This website is a showcase of my diverse portfolio, highlighting my expertise and creativity. I'm eager to explore new opportunities and collaborations. Feel free to browse through my work and get in touch to discuss how we can create something amazing together.                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-outline-dark btn-lg px-4 me-md-2 d-flex align-item-center" onClick={() => aboutMePage()}>
                     <InformationDiamondIcon className="mt-1" /> <span className="px-1">About Me</span>
                  </button>
                  <button type="button" className="btn btn-outline-dark btn-lg px-4 d-flex align-item-center" onClick={() => myProjectPage()}>
                    <SearchAreaIcon className="mt-1" /> <span className="px-2">Explore</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
};

export default IntroSec
