import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UnityApp from "./components/UnityPage";

const style = {
    width: window.screen.width,
    height: window.screen.height,
    margin: "0 auto",
};

ReactDOM.render(
  <React.StrictMode>
      <div style={{background: "#000000"}}>
          <div style={style}>
              <UnityApp />
          </div>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
