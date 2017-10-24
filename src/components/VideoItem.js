// @flow

import React from 'react';
import './VideoItem.css';
import type {Video} from './types';

type Props = {
  video: Video
};

const VideoItem = function(props: Props) {

    return (<div className="video-item">
    <h1>{props.video.title}</h1>
    <img src={props.video.image} alt={props.video.title} />
    </div>);
}

export default VideoItem;
