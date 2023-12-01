// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//new code
import { useState } from 'react';
import './App.css'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from 'react';
import Calculator from './Pages/Calculator';
import './App.css';

 

const  App = () =>{
  return (
    <div>
      <BrowserRouter>
        <Routes>
      
            <Route path="calculator" element={<Calculator />} />
           
          </Routes>
   
      </BrowserRouter>


    </div>
  )
};

 

// return (
  //   <div className="App">
  //     <Calculator />
  //   </div>
  // );

export default App;

 

 

 
