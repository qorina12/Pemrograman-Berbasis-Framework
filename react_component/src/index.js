import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LifeCycle from './LifeCycle';
import HelloComponent from './component/HelloComponent';
import Loginform from './tugasLogin/form';
import reportWebVitals from './reportWebVitals';

class StanteFullComponent extends React.Component {
  render(){
    return <p>StateFullComponent</p>
  }
}

ReactDOM.render(<Loginform/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
