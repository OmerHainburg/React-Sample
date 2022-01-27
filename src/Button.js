import React from 'react';
//import ReactDOM from 'react-dom';

export class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

// export class Button extends React.Component {
//     render() {
//       return (
//         <button onClick={this.props.talk}>
//           Click me!
//         </button>
//       );
//     }
//   }

//   class Button extends React.Component {
//     render() {
//       return (
//         <button>
//           {this.props.text}
//         </button>
//       );
//     }
//   }
  
//   // defaultProps goes here:
//   Button.defaultProps = {
//     text: 'I am a button'
//   }
  
//   ReactDOM.render(
//     <Button />, 
//     document.getElementById('app')
//   );

//ReactDOM.render(<Button />, document.getElementById('app'));