import React, { useEffect } from "react";

const YouTubePlayer = ({videoID}) => {
  useEffect(() => {
    // Cargar el reproductor de YouTube
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;

    // Función para inicializar el reproductor de YouTube
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player("player", {
        videoId: videoID, // Coloca aquí la ID de tu video
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          loop: 1,
          mute: 1,
          playlist: videoID, // Reproduce la misma ID de video en bucle
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    // Función para reproducir el video cuando esté listo
    const onPlayerReady = (event) => {
      event.target.playVideo();
    };

    // Limpieza al desmontar el componente
    return () => {
      // player.destroy();
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  return <div id="player"></div>;
};

export default YouTubePlayer;
