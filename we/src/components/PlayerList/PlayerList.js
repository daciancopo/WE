import React, { Component } from 'react'
import { videos } from '../../media/videos'

class PlayerList extends Component {
    constructor(props) {
        super(props)
    }
    handlePlay = (val) => {
        this.props.handleCurrentVideo(val)
    }
    render() {
        return (
            <div>
                {videos.map((item, idx) => (
                    <div key={idx} className='d-flex mt-3 ml-3'>
                        <button className='btn rounded-pill btn-primary' onClick={() => this.handlePlay(item)}>
                            play
                        </button>
                        <span className='ml-2'>
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        )
    }
}

export default PlayerList
