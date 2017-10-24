// @flow

import React from 'react';
import './VideoItem.css';

type Video = {
  image: string,
  title: string
};

type Props = {
  video: Video
};

const VideoItem = function(props: Props) {
  console.log(props);
    return (<div className="video-item">
    <h1>{props.video.title}</h1>
    <img src={props.video.image} alt={props.video.title} />
    </div>);
}

export default VideoItem;
