// @flow

import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';
import type {Video} from './types';

type Props = {
    videos: Array<Video>
};

const VideoList = (props: Props) => {

const VideoItems = props.videos.map(v =>
  <VideoItem key={v.id} video={v}/>
)
  return <div className="video-list">{VideoItems}</div>

}

export default VideoList;
