import React from "react";


function Footer() {
    return (
        <section id="Footer">
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                <a
                  href="./index.html"
                  className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                >
                  <img
                    className="logo box_seam_fill"
                    src="./all_svg/box_seam_fill.svg"
                    alt=""
                  />
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2023 by Rishabh</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                  <a className="text-body-secondary about_me" href="./about_me.html">
                    <img
                      className="logo about_me"
                      src="./all_svg/file_earmark_person_fill.svg"
                      alt="About Me"
                    />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-body-secondary contact_me" href="./about_me.html">
                    <img
                      className="logo contact_me"
                      src="./all_svg/envelope_arrow_up_fill.svg"
                      alt="Contact me"
                    />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-body-secondary feedback" href="#">
                    <img
                      className="logo chat_square_heart"
                      src="./all_svg/chat_square heart.svg"
                      alt="feedback"
                    />
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </section>
    )
};

export default Footer;