import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './../../scss/_style.scss';

import { Route, Switch } from 'react-router-dom';
import Transitions from 'components/transitions';

import EditGameContainer from 'components/game/EditGameContainer';
import PlayerContainer from 'components/player/PlayerContainer';
import EditBagComponent from 'components/bag/EditBagComponent';
import AddCourseComponent from 'components/course/AddCourseComponent';
import ClubsContainer from 'components/club/ClubsContainer';
import MarkersContainer from 'components/player/MarkersContainer';
import NavigationShell from 'components/app/NavigationShellComponent';

injectTapEventPlugin();

class AppComponent extends Component {

    render () {

        return <React.Fragment>
            <NavigationShell>
                <Route
            render={({ location }) => (
            <Transitions pageKey={location.key} {...location.state}>
                <Switch location={location}>
                    <Route path="/newgame" render={ () => <EditGameContainer/> }/>
                    <Route path="/player" render={ () => <PlayerContainer/> }/>
                    <Route path="/courses" render={ () => <AddCourseComponent/> }/>
                    <Route path="/bag" render={ () => <EditBagComponent/> }/>
                    <Route path="/clubs" render={ () => <ClubsContainer/> }/>
                    <Route path="/markers" render={ () => <MarkersContainer/> }/>
                    </Switch>
              </Transitions>
            )}/>
            </NavigationShell>
        </React.Fragment>;
    }
}

export default AppComponent;
