import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store.js';

render(<Provider store={store}><HashRouter>< App /></HashRouter></Provider>, document.getElementById('root') );
