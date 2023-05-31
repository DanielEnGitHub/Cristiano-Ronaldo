import React from "react";
import { cr7PNG } from "../../utils/image";
import "./home.css";
import YouTubePlayer from "./YouTubePlayer";

const Home = () => {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  return (
    <>
      <div className="main-home">
        {isFirefox ? (
          <div className="main-home-image">
            <img src={cr7PNG} className="image-w" />
          </div>
        ) : (
          <div className="bg-image">
            <YouTubePlayer videoID="W9ABYUvkF2I" />
          </div>
        )}

        {/* W9ABYUvkF2I  cool */}
        {/* eFgSL_CHYwg  goals */}
        {/* NSUPwdS9sIo funny */}
      </div>
    </>
  );
};

export default Home;
