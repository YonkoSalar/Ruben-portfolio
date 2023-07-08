import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";

function Project() {
  const [isPlaying, setPlaying] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [hasEnded, setEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fade = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
  });

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setEnded(false);
        setTimeout(() => {
          setVisible(false);
        }, 2000);
      }
      setPlaying(!isPlaying);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setPlaying(true);
      setEnded(false);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  };

  const handleVideoEnd = () => {
    setPlaying(false);
    setVisible(true);
    setEnded(true);
  };

  return (
    <div className="w-full items-center justify-items-center bg-white">
      <h1 className="mb-4 pt-20 text-4xl font-extrabold underline decoration-purple-500 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        Showreel
      </h1>

      <animated.div
        style={fade}
        className="relative flex justify-center items-center py-10"
      >
        <video
          ref={videoRef}
          className="w-2/3 object-cover"
          onEnded={handleVideoEnd}
          onClick={handlePlayPause}
          autoPlay={isMobile() ? false : true}
          muted={isMobile() ? true : false}
          // controls={isMobile() ? true : false}
          poster="/black-screen-2.jpg" // Add this line
        >
          <source src="/Showreel2023_Ruben.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {(isVisible || !isPlaying) && (
          <div
            className="absolute inset-0 flex justify-center items-center bg-opacity-50 cursor-pointer"
            onClick={!hasEnded ? handlePlayPause : handleReplay}
          >
            <button className="text-white text-4xl">
              {!hasEnded ? (
                isPlaying ? (
                  <FontAwesomeIcon icon={faPause} color="white" />
                ) : (
                  <FontAwesomeIcon icon={faPlay} color="white" />
                )
              ) : (
                <FontAwesomeIcon icon={faRedo} color="black" />
              )}{" "}
            </button>
          </div>
        )}
      </animated.div>
    </div>
  );
}

export default Project;
