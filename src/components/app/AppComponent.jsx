import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './../../scss/_style.scss';

import { Route, NavLink } from 'react-router-dom';

import EditGameContainer from 'components/game/EditGameContainer';
import PlayerContainer from 'components/player/PlayerContainer';
import ButtonBarContainer from 'components/app/ButtonBarContainer';
import EditBagComponent from 'components/bag/EditBagComponent';
import AddCourseComponent from 'components/course/AddCourseComponent';
import ClubsContainer from 'components/club/ClubsContainer';
import MarkersContainer from 'components/player/MarkersContainer';

injectTapEventPlugin();

const NavigationShell = ({ children }) => {
    return <React.Fragment>
        <NavLink className="btn--action wide" to="/newgame"><div className="btn--action__label">New game</div></NavLink>
        { children }
        <ButtonBarContainer/>
    </React.Fragment>;
};

class AppComponent extends Component {

    state = {
        newGameOpen: false
    }

    NewGameOpenClicked = () => {

        this.setState((state) => {

            return {
                ...state,
                newGameOpen: !state.newGameOpen
            };
        });
    }

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
