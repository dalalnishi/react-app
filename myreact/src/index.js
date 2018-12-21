import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {App,Test,Demo} from './App';
import Testinput from './Testinput';
import Togglenames from './Togglenames';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App name="hello from rendering" />, document.getElementById('root'));
//ReactDOM.render(<Test />, document.getElementById('root2'));
//ReactDOM.render(<Demo />, document.getElementById('root3'));

ReactDOM.render(<Togglenames />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
