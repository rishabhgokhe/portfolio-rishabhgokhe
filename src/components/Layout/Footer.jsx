import React from "react";

// Icon Imports
import UserCircleIcon from "../../assets/svg/icons/UserCircleIcon";
import MailUpload01Icon from "../../assets/svg/icons/MailUpload01Icon";
import MailOpenIcon from "../../assets/svg/icons/MailOpenIcon";


function Footer() {
    return (
        <section id="Footer">
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center inter" style={{fontSize: "40px"}}>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2023 by Rishabh</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                  <a className="text-body-secondary about_me" href="./about_me.html">
                   <UserCircleIcon />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-body-secondary contact_me" href="./about_me.html">
                    <MailUpload01Icon />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-body-secondary feedback" href="#">
                    <MailOpenIcon />
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </section>
    )
};

export default Footer;