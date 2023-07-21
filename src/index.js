<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = {
  // 테마 설정 (선택적으로 추가할 수 있음)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> 3b1337aa43e5d3dd07aa698a4537bbb9d2fceb42
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
