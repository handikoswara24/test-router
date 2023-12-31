import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
// root.render(
//   <Router basename={""}>
//     <App />
//   </Router>
// );
ReactDOM.render(<Router basename={""}>
  <App />
</Router>, root)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
registerServiceWorker()
