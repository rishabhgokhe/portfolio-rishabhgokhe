import React from "react";
import UserCircleIcon from "../../assets/svg/icons/UserCircleIcon";
import MailUpload01Icon from "../../assets/svg/icons/MailUpload01Icon";
import MailOpenIcon from "../../assets/svg/icons/MailOpenIcon";

const Footer: React.FC = () => {
  return (
    <section id="Footer" className="py-4 border-t">
      <div className="container mx-auto">
        <footer className="flex flex-wrap justify-between items-center">
          <div className="col-md-4 flex items-center text-body-secondary text-lg">
            <span>© 2023 by Rishabh</span>
          </div>

          <ul className="nav col-md-4 flex justify-end list-none">
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
  );
}

export default Footer;
