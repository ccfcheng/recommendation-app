import document from 'global/document';
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';

const appContainer = document.getElementById('app');

ReactDOM.render(<Test/>, appContainer);
