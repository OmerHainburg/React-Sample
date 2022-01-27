import React from 'react';
//import ReactDOM from 'react-dom';


const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg',
  width: '200px',
  height: '200px'
};

export default function Owl (){
    return (
        <div>
            <h1>{owl.title}</h1>
            <img src={owl.src} alt={owl.title} className='photo'/>
       </div>
    );
  }

// Component class starts here:
// class Owl extends React.Component {
//   render() {
//     return (
//     <div>
//       <h1>{owl.title}</h1>
//       <img src={owl.src} alt={owl.title} />
//     </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Owl />,
//   document.getElementById('app')
// )