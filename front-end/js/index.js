import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from '../components/test';

const app = (a, b) => {
    return a + b;
}

alert(app(4,5));

ReactDOM.render(<TestComponent />, document.getElementById('app'));
