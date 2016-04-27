import document from 'global/document';
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDOM.render(<Test/>, appContainer);
