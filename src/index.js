import React from 'react';
import ReactDOM from 'react-dom';
import Index from './containers/index';

addEventListener('load', () => {
    ReactDOM.render(
        <Index />, document.querySelector('main'));
});