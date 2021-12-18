import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import PlayerList from "./components/PlayerList/PlayerList";
import "./App.css"

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null
    }
    this.handleCurrentVideo = this.handleCurrentVideo.bind(this);
  }

  handleCurrentVideo = (val) => {
    this.setState({ currentVideo: val.item })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">

          <VideoPlayer currentVideo={this.state.currentVideo} />
          <div>
            <PlayerList handleCurrentVideo={this.handleCurrentVideo} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
