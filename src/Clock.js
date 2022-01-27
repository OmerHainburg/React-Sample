import React from 'react';
//import ReactDOM from 'react-dom';

export class Clock extends React.Component {
  // Add your methods in here.
  constructor(props){
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
            const oneSecond = 1000;
        setInterval(() => {
        this.setState({ date: new Date() });
        }, oneSecond);
  }

  render(){
      return (
          <div>
            <h1>Introduction to Lifecycle Methods</h1>
            {this.state.date.toLocaleTimeString()}
          </div>
        );
    }
}

//ReactDOM.render(<Clock />, document.getElementById('app'));