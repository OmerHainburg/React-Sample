import React from 'react';
//import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

export default function TonightsPlan (){
    let task;
    if (!fiftyFifty)
    {
       task = "Tonight I'm going out WOOO"
    }
    else
    {
      task = "Tonight I'm going out WOOO"
    }
    return ( <h1>{task}</h1> );
  }

// // New component class starts here:
// class TonightsPlan extends React.Component {
//   render() {
//   let task;
//   if (!fiftyFifty)
//   {
//      task = "Tonight I'm going out WOOO"
//   }
//   else
//   {
//     task = "Tonight I'm going out WOOO"
//   }
//   return <h1>{task}</h1>;
//    }
//  }

//  ReactDOM.render(<TonightsPlan />, document.getElementById('app'))