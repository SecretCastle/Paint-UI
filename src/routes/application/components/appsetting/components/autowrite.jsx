import React, { PureComponent } from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1 style={{color: this.props.color}}>Hello, World!</h1>
        <h2 style={{color: this.props.color}}>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class AutoWrite extends PureComponent {
  render () {
    return (
      <div>
        <Clock {...this.props}/>
      </div>
    )
  }
}

export default AutoWrite;
