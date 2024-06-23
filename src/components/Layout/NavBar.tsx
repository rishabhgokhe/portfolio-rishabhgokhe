import React from "react";

// Icon Imports
import GithubIcon from "../../assets/svg/icons/GithubIcon";
import UserAccountIcon from "../../assets/svg/icons/UserAccountIcon";
import InstagramIcon from "../../assets/svg/icons/InstagramIcon";
import RedditIcon from "../../assets/svg/icons/RedditIcon";
import Linkedin01Icon from "../../assets/svg/icons/Linkedin01Icon";
import NewTwitterRectangleIcon from "../../assets/svg/icons/NewTwitterRectangleIcon";

const date = new Date().toString().split(" ");
const day = date[0];
const month = date[1];
const currentDate = date[2];

const NavBar: React.FC = () => {
  return (
    <section id="nav-bar">
      <div className="container mx-auto">
        <header className="flex flex-wrap justify-center py-3">
          <a
            href="./index.html"
            className="flex items-center mb-3 mb-md-0 me-md-auto text-gray-700 no-underline"
          >
            <UserAccountIcon />
            <span className="ml-2 text-gray-700 font-bold text-xl">
              Portfolio
            </span>
          </a>

          <ul className="flex ml-auto space-x-6">
            <li>
              <a
                href="https://github.com/rishabhgokhe"
                className="text-gray-700 hover:text-gray-900"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/rishabh_gokhe?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                className="text-gray-700 hover:text-gray-900"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/u/DiscoversOther9152/s/kS20bBPbSF"
                className="text-gray-700 hover:text-gray-900"
              >
                <RedditIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rishabh-gokhe-22168b287"
                className="text-gray-700 hover:text-gray-900"
              >
                <Linkedin01Icon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/rishabhgokhe?s=21&t=Flej6ro1R2UhXzVpOMJTdg"
                className="text-gray-700 hover:text-gray-900"
              >
                <NewTwitterRectangleIcon />
              </a>
            </li>
          </ul>

          <div className="ml-auto">
            <p className="text-white font-bold text-2xl">{`${day} ${month} ${currentDate}`}</p>
          </div>
        </header>
      </div>
    </section>
  );
};

export default NavBar;