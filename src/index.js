import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app/AppContainer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/_style.scss';

import configureStore from './store/configureStore';
import GameNavigatorContainer from 'components/game/GameNavigatorContainer';
import SplashScreen from 'components/app/SplashScreen';

const store = configureStore();

const app = document.getElementById('app-container');

const render = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={ AppContainer } />
                        <Route path="/settings" component={ AppContainer } />
                        <Route path="/game/:gameid" component={ GameNavigatorContainer } />
                    </Switch>
                </React.Fragment>
            </Router>
        </Provider>,
    app);
};

render();
