import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useSpring, animated } from 'react-spring';

function Home() {
  const fade = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    
  });

  return (
    <div className="flex flex-row flex-wrap-reverse items-center justify-center h-screen space-x-8 bg-black overflow-hidden pb-10">
      <animated.div style={fade} className=" flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold text-white">Ruben Nicolaysen Pedersen</h1>
        <hr className="my-4 mx-auto w-2/3 md:w-full"></hr>

        <h2 className="text-2xl font-semibold text-white ">Creative Director / Editor</h2>
        <div className="flex flex-row space-x-6  pt-2 md:items-center justify-center">
          <FontAwesomeIcon icon={faYoutube} color="white" size="2x" />
          <FontAwesomeIcon icon={faLinkedin} color="white" size="2x" />
          <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />
        </div>
      </animated.div>
      <animated.div style={fade}  className=" flex justify-center items-center pb-10 relative">
        <div className="max-w-lg md:max-w-full">
          <img
            src="/ruben-transformed.png"
            alt="Image of George"
            className="w-full h-auto filter drop-shadow-xl"
          />
        </div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </animated.div>
    </div>
  );
}

export default Home;
