import React from "react";

// Icon Imports
import GithubIcon from "../../assets/svg/icons/GithubIcon.jsx"
import UserAccountIcon from "../../assets/svg/icons/UserAccountIcon.jsx";
import InstagramIcon from "../../assets/svg/icons/InstagramIcon.jsx";
import RedditIcon from "../../assets/svg/icons/RedditIcon.jsx";
import Linkedin01Icon from "../../assets/svg/icons/Linkedin01Icon.jsx";
import NewTwitterRectangleIcon from "../../assets/svg/icons/NewTwitterRectangleIcon.jsx";

function NavBar() {
    return (
        <section id="nav-bar" className="gradient-backgroun">
          <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3">
              <a
                href="./index.html"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              >
                <UserAccountIcon />
                <span style={{marginLeft: "5px"}} className="fs-4 inter">Rishabh Gokhe</span>
              </a>

              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a href="https://github.com/rishabhgokhe" className="nav-link">
                    <GithubIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://instagram.com/rishabh_gokhe?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" className="nav-link" >
                    <InstagramIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.reddit.com/u/DiscoversOther9152/s/kS20bBPbSF" className="nav-link">
                    <RedditIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.linkedin.com/in/rishabh-gokhe-22168b287" className="nav-link">
                    <Linkedin01Icon />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com/rishabhgokhe?s=21&t=Flej6ro1R2UhXzVpOMJTdg" className="nav-link">
                    <NewTwitterRectangleIcon />
                  </a>
                </li>
              </ul>
            </header>
          </div>
        </section>
    )
}

export default NavBar;
