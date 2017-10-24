import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css'

const VideoList = props => {

const VideoItems = props.videos
.map(v =>
  <VideoItem
    key={v.id.videoId}
    id={v.id.videoId}
    image={v.snippet.thumbnails.medium.url}
    title={v.snippet.title}/>
)
  return (
    <div className="video-list">{VideoItems}</div>
  )

}

export default VideoList;
