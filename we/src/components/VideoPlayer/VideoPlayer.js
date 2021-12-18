import React, { Component } from 'react';
import { videos } from '../../media/videos';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVideo: this.props.currentVideo ?? "",
            currentVideoID: ""
        }
    }
    componentDidMount = () => {
        if(!this.state.currentVideo){
            this.playFirst();
        }
    }

    componentDidUpdate = () => {
        if (this.props.currentVideo && this.state.currentVideo !== this.props.currentVideo) {
            this.setState({ currentVideo: this.props.currentVideo })
        }
    }
    playFirst = () => {
        videos.map((val) => {
            if(val.id === "1"){
                this.setState({currentVideo: val.item})
            }
        })
    }
    looping(event) {
        videos.map((val) => {
            if(this.state.currentVideo !== val.item){
                    this.setState({currentVideo: val.item})
                    event.target.src = val.item
                    event.target.play();
                }
            
        })
    }
    render() {
        const { currentVideo } = this.state
        return (
            <div className='video-player'>
                <video width="auto" height="400" controls autoPlay onEnded = {(event) => this.looping(event)}>
                    {currentVideo && (
                        <source src={currentVideo} type="video/mp4" />
                        )}
                </video>
            </div>
        )
    }
}

export default VideoPlayer
