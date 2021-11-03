import ReactDOM from 'react-dom';
import Main from './main'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
// import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));