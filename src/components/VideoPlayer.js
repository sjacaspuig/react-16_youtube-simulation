//@flow

import React, {Component} from 'react';
import type {ContextRouter} from 'react-router-dom';
import axios from 'axios';

type State = {
  id: string,
  title: string
};


class VideoPlayer extends Component<ContextRouter, State> {

  constructor(props: ContextRouter) {
    super(props);

    this.state = {
      title: "",
      id: props.match.params.id
    }

  const url: string = "https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=" + this.state.id + "t&key=AIzaSyDvuLhQ9lT4dC8pQeZxRHj6p5uKHZVjzno";
  axios.get(url).then(r => {
      const items = r.data.items;
      if(items.length > 0) {
        const title = items[0].snippet.title;
        this.setState({title: title});
      }
  });
}

  render() {
    return (
      <div className="video-item">
        <h1>{this.state.title}</h1>
        <iframe
          title={this.state.id}
          width="560" height="315"
          src={"https://www.youtube.com/embed/" + this.state.id}
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
    );
  }
}

export default VideoPlayer;
