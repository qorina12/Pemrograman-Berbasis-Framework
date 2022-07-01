import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from './container/BlogPost/BlogPost';
import MahasiswaBlogPost from './container/BlogPost/MahasiswaBlogPost';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<MahasiswaBlogPost />,document.getElementById('content'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
