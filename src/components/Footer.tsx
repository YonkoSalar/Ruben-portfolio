import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";



function Footer() {
  return (
    <footer className="bg-white w-full bottom-0 static text-center py-6">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center pb-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faYoutube} color="black" size="lg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faLinkedin} color="black" size="lg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faFacebook} color="black" size="lg" />
              </a>
            </li>
          </ul>
        </div>

        <p className="text-black text-sm mt-4">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://salaradel.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Salar Adel
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
