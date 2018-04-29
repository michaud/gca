import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app/AppContainer';
import { Provider } from 'react-redux';
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';

import './scss/_style.scss';

import configureStore from './store/configureStore';

const store = configureStore();

const app = document.getElementById('app-container');

const render = App => {
  ReactDOM.render(<HotLoaderContainer>
        <Provider store={ store }>
            <App />
        </Provider>
    </HotLoaderContainer>,
    app);
};

render(AppContainer);

if (module.hot) {
  module.hot.accept('./components/app/AppContainer', () => render(AppContainer));
}
