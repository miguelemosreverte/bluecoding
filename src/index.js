import React from 'react';
import ReactDOM from 'react-dom';
import KeyboardSearch from './components/KeywordSearch'
import 'bootstrap/dist/css/bootstrap.min.css';


const render = (className, component) =>
document.querySelectorAll(className).forEach(function (element) {
  return ReactDOM.render( component(), element);
});


render('#App', p => <KeyboardSearch keyword = "chesseburgers"/> )
