import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.jsx';

function showAlert() {
    alert('Hello!');
}

ReactDOM.render(
    <Root color="blue" alert={showAlert} />,
    document.getElementById('myApp')
);