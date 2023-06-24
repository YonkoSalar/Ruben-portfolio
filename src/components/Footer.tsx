import React from "react";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer className="bg-white p-4 mt-10 flex justify-center">
      <a
        href="https://www.facebook.com"
        className="text-white mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.twitter.com"
        className="text-white mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com"
        className="text-white mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com"
        className="text-white mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://www.github.com"
        className="text-white mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </footer>
  );
}

export default Footer;
