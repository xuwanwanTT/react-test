import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Welcome from './Welcome'
// import {Welcome} from './Welcome'
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <h1>Hi, world!</h1>,
//   document.getElementById('root')
// );
// registerServiceWorker();

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
