import React from 'react';

class Slide extends React.Component {
    render() {
        return (
            <div className="slider" id="bpm-slider">
                  <div className="bpm">{this.props.bpm} BPM</div>
                  <input className="input5" type="range" min="60" max="240" value={this.props.bpm} onChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default Slide;