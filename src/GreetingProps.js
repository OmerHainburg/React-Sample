import React from 'react';
import ReactDOM from 'react-dom';

class GreetingProps extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <GreetingProps firstName='Omer' />, 
  document.getElementById('app')
);