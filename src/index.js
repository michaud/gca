import React from 'react';
import ReactDOM from 'react-dom';
import MainAppContainer from './components/app/MainAppContainer';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import './scss/_style.scss';

import configureStore from './store/configureStore';

const store = configureStore();

const app = document.getElementById('app-container');

const render = App => {
  ReactDOM.render(<AppContainer>
        <Provider store={ store }>
            <App />
        </Provider>
    </AppContainer>,
    app);
};

render(MainAppContainer);

if (module.hot) {
  module.hot.accept('./components/app/MainAppContainer', () => render(MainAppContainer));
}
