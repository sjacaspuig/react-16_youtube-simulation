import React from 'react';
import './VideoItem.css';
import PropTypes from 'prop-types'

const VideoItem = function(props) {
  console.log(props);
    return (<div className="video-item">
    <h1>{props.video.title}</h1>
    <img src={props.video.image} alt={props.video.title} />
    </div>);
}

VideoItem.propTypes = {
  video: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string
  })
}

export default VideoItem;
