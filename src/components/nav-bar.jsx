import React from "react";

//Header Imports
import card from '../assets/svg/person_vcard.svg'

function NavBar() {
    return (
        <section id="nav-bar" className="gradient-backgroun">
          <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3">
              <a
                href="./index.html"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              >
                <img
                  src={card}
                  className="logo person_vcard"
                  alt="github"
                />
                <span className="fs-4">Rishabh Gokhe</span>
              </a>

              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a href="https://github.com/rishabhgokhe" className="nav-link">
                    <img src="./all_svg/github.svg" className="logo github" alt="github" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://instagram.com/rishabh_gokhe?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                    className="nav-link"
                  >
                    <img className="logo instagram" src="./all_svg/instagram.svg" alt="instagram" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.reddit.com/u/DiscoversOther9152/s/kS20bBPbSF" className="nav-link">
                    <img className="logo reddit" src="./all_svg/reddit.svg" alt="reddit" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.linkedin.com/in/rishabh-gokhe-22168b287" className="nav-link">
                    <img className="logo linkedin" src="./all_svg/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com/rishabhgokhe?s=21&t=Flej6ro1R2UhXzVpOMJTdg" className="nav-link">
                    <img className="logo twitter" src="./all_svg/twitter.svg" alt="twitter" />
                  </a>
                </li>
              </ul>
            </header>
          </div>
        </section>
    )
}

export default NavBar;
