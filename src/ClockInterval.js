import React from 'react';

export class ClockInterval extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }

  componentWillUnmount()
  {
    clearInterval(this.intervalID);
  }

  render() {
    return <div>
                <h1>componentWillUnmount</h1>
                {this.state.date.toLocaleTimeString()}
            </div>;
  }
}