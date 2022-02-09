import React from 'react';
import Slide from'./Slider.js'
import Button from'./Button.js'
import '../Style/Question5.css'


class Metronome extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          bpm: 100,
          playing: false,
          count: 0,
      }
      this.clickOne = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
      this.clickTwo = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
      
      this.handleBPM = this.handleBPM.bind(this);
      this.updateInterval = this.updateInterval.bind(this);
      this.startStop = this.startStop.bind(this);
      this.playClick = this.playClick.bind(this);
  }

  updateInterval() {
      const bmpSpeed = 60 * 1000 / this.state.bpm;
      this.timer = setInterval(this.playClick, bmpSpeed);
  }

  handleBPM(event) {
      const bpm = event.target.value;
      if (this.state.playing) {
          clearInterval(this.timer);
          this.updateInterval();
          this.setState({
              count: 0,
              bpm
          });
      } else {
          this.setState({
              bpm
          });
      };
  }

  playClick() {
      if (this.state.count === 0) this.clickTwo.play();
      else this.clickOne.play();
      this.setState({
          count: this.state.count + 1
      });
  }

  startStop() {
      if (this.state.playing) {
          clearInterval(this.timer);
          this.setState({
              playing: false
          });
      } else {
          this.updateInterval();
          this.setState({
              count: 0,
              playing: true
          }, this.playClick)
      }
  }

  render() {
      return (
          <div className="body5">
        <div className="box">
            <Slide  bpm={this.state.bpm} handleChange={this.handleBPM}/>
            <Button handleClick={this.startStop} currentState={this.state.playing}/>
        </div>
        </div>
      );
  }
}

export default Metronome;