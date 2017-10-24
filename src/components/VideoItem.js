import React from 'react';
import './VideoItem.css';

const VideoItem = function(props) {
  console.log(props);
    return (<div className="video-item">
    <h1>{props.title}</h1>
    <img src={props.image} alt={props.title} />
    </div>);
}

export default VideoItem;
