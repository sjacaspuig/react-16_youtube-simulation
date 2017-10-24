import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {

const VideoItems = props.videos
.map(v =>
  <VideoItem
    key={v.id.videoId}
    id={v.id.videoId}
    title={v.snippet.title}/>
)
  return (
    <div>{VideoItems}</div>
  )

}

export default VideoList;
