import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css'

const VideoList = props => {

  const videos = props.videos.map(v => {
    return {
      id: v.id.videoId,
      title: v.snippet.title,
      image: v.snippet.thumbnails.medium.url
    }
  }
  )

const VideoItems = videos
.map(v =>
  <VideoItem key={v.id} video={v}/>
)
  return (
    <div className="video-list">{VideoItems}</div>
  )

}

export default VideoList;
