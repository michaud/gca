import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './../../scss/_style.scss';

import { Route, Switch } from 'react-router-dom';
import Transitions from 'components/transitions';

import EditGameContainer from 'components/game/EditGameContainer';
import EditBagComponent from 'components/bag/EditBagComponent';
import AddCourseComponent from 'components/course/AddCourseComponent';
import NavigationShell from 'components/app/NavigationShellComponent';
import GameListContainer from 'components/game/GameListContainer';
import PlayersComponent from 'components/player/PlayersComponent';

injectTapEventPlugin();

class AppComponent extends Component {

    render () {

        return <React.Fragment>
            <NavigationShell>
                <Route render={({ location }) => (
                    <Transitions pageKey={location.key} {...location.state}>
                        <Switch location={location}>
                            <Route path="/settings/newgame" render={ () => <EditGameContainer/> }/>
                            <Route path="/settings/players" render={ () => <PlayersComponent/> }/>
                            <Route path="/settings/courses" render={ () => <AddCourseComponent/> }/>
                            <Route path="/settings/bag" render={ () => <EditBagComponent/> }/>
                            <Route path="/settings/games" render={ () => <GameListContainer/> }/>
                        </Switch>
                </Transitions>
                )}/>
            </NavigationShell>
        </React.Fragment>;
    }
}

export default AppComponent;
