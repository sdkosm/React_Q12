// import { useState } from "react";
// import React from 'react';
// import './App.css';

// function App() {

//   const [image, setImage] = useState("purple");

//   const changeImage = () => {
//     if (image === 'purple') {
//       setImage('Green');
//     } else {
//       setImage('purple');
//     }
//   };

//   return (
//     <div className="dk1">
//      <div value={image} className="Box1"></div>
//      <br></br>
//      <div value={image} className="Box2"></div>
//      <br></br>
//      <br></br>
//       <button onClick={changeImage}>Change Image </button>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import './App.css';
import B1 from './component/B1/B1.component';
import B2 from './component/B2/B2.component'

function App() {
  const [image,setImage]=useState(true)

  return (
    <div className='dk'>
      {
        image===true ? <B1/> : <B2/>
      }
      <br></br>
      <br></br>
     <button className='dk1' value={image}  onClick={_ => setImage(!image)}>Change Color Image</button>
    </div>
  );
}

export default App;