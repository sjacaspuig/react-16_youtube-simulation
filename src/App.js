//@ flow

import React, { Component } from 'react';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import MenuBar from './components/MenuBar';
import axios from 'axios';
import type {Video} from './components/types';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

type Props = void;

type State = {
  videos: Array<Video>
};

class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      videos: []
    };
  };

  search(query: string) {
    const url: string= "https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=" + query + "t&key=AIzaSyDvuLhQ9lT4dC8pQeZxRHj6p5uKHZVjzno";

    axios.get(url)
    .then( response => {
      const items = response.data.items;
      const videos = items
      .filter(v => v.id.kind === 'youtube#video')
      .map(v => {
              return {
                id: v.id.videoId,
                title: v.snippet.title,
                image: v.snippet.thumbnails.medium.url
              }
            })
      this.setState({ videos: videos});
    })
    .catch( error => console.log("ERROR!!", error));
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route render={(context: ContextRouter) => {
              return <MenuBar onSearch={(value: string)=> {
                 this.search(value);
                 context.history.push('/');
               }}/>
            }}/>
            <Switch>
              <Route exact path="/" render={() => {
                  return <VideoList videos={this.state.videos}/>
                }}/>
              <Route path="/detail/:id" component={VideoPlayer}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>);
  };

};

export default App;
