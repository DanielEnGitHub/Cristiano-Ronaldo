import React from "react";
import "./home.css";
import YouTubePlayer from "./YouTubePlayer";

const Home = () => {
  return (
    <>
      <div className="main-home">
        {/* W9ABYUvkF2I  cool */}
        {/* eFgSL_CHYwg  goals */}
        {/* NSUPwdS9sIo funny */}
        <div className="bg-image">
          <YouTubePlayer videoID="NSUPwdS9sIo" />
        </div>
      </div>
    </>
  );
};

export default Home;
