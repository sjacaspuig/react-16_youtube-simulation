// @flow

import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';
import type {Video} from './types';
import { Link } from 'react-router-dom'

type Props = {
    videos: Array<Video>
};

const VideoList = (props: Props) => {

  const VideoItems = props.videos.map(v =>
    <Link key={v.id} to={"/detail/" + v.id}>
      <VideoItem video={v}/>
    </Link>
  );

  return <div className="video-list">{VideoItems}</div>
}

export default VideoList;
