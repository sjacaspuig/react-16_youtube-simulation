//@flow

import React from 'react';
import type {ContextRouter} from 'react-router-dom';


const VideoPlayer = function(props: ContextRouter) {

  const videoId = props.match.params.id;

  return (
    <div className="video-item">
      <h1>{videoId}</h1>
      <iframe
        title={videoId}
        width="560" height="315"
        src={"https://www.youtube.com/embed/" + videoId}
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default VideoPlayer;
