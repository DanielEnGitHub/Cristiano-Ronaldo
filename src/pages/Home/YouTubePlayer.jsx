import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoID, mute = true, className = "" }) => {
  return (
    <div className={className}>
      <YouTube
        className={"video-yt"}
        videoId={videoID}
        opts={{
          playerVars: {
            autoplay: 1, // Activa la reproducción automática
            loop: 1, // Reproduce el video en bucle
            controls: 0, // Desactiva los controles del reproductor
            disablekb: 1, // Desactiva las teclas del reproductor
            playlist: videoID,
          },
        }}
        onReady={(event) => {
          mute && event.target.mute(); // Mute el video
          event.target.playVideo(); // Inicia la reproducción del video
        }}
      />
    </div>
  );
};

export default YouTubePlayer;
