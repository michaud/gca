import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app/AppContainer';
import { Provider } from 'react-redux';
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './scss/_style.scss';

import configureStore from './store/configureStore';
import GameNavigatorContainer from 'components/game/GameNavigatorContainer';
import SplashScreen from 'components/app/SplashScreen';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

const store = configureStore();

const app = document.getElementById('app-container');

const render = App => {
    ReactDOM.render(<HotLoaderContainer>
        <Provider store={store}>
            <Router>
                <React.Fragment>
                    <Route path="/" component={ AppContainer } />
                    <Route exact path="/game/:gameid" component={ GameNavigatorContainer } />
                </React.Fragment>
            </Router>
        </Provider>
    </HotLoaderContainer>,
    app);
};

render(AppContainer);

if (module.hot) {
    module.hot.accept('./components/app/AppContainer', () => render(AppContainer));
}
