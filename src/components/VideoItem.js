import React from 'react';

const VideoItem = function(props) {
  console.log(props);
    return (<div>
    <h1>{props.title}</h1>
    <iframe
title={props.title}
    width="560" height="315"
    src={"https://www.youtube.com/embed/"+props.id}
    frameBorder="0" allowFullScreen>
    </iframe>
    </div>);
}

export default VideoItem;
