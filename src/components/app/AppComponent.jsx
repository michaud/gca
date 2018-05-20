import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './../../scss/_style.scss';

import { Route } from 'react-router-dom';

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
            <Route exact path="/" render={ () =>
                <NavigationShell/>
            }/>
            <Route path="/newgame" render={ () =>
                <NavigationShell>
                    <EditGameContainer/>
                </NavigationShell>
            }/>
            <Route path="/player" render={ () =>
                <NavigationShell>
                    <PlayerContainer/>
                </NavigationShell>
            }/>
            <Route path="/courses" render={ () =>
                <NavigationShell>
                    <AddCourseComponent/>
                </NavigationShell>
            }/>
            <Route path="/bag" render={ () =>
                <NavigationShell>
                    <EditBagComponent/>
                </NavigationShell>
            }/>
            <Route path="/clubs" render={ () =>
                <NavigationShell>
                    <ClubsContainer/>
                </NavigationShell>
            }/>
            <Route path="/markers" render={ () =>
                <NavigationShell>
                    <MarkersContainer/>
                </NavigationShell>
            }/>
        </React.Fragment>;
    }
}

export default AppComponent;
