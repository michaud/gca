import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import cuid from 'cuid';

import EditGameFieldsContainer from 'components/game/edit/EditGameFieldsContainer';
import ModuleHeader from 'components/app/ModuleHeader';

export default class NewGameComponent extends Component {

    state = {
        canStartGame: false,
        gameData: undefined
    }

    canStartGame = (can, gameData) => {

        const id = can ? cuid() : undefined;

        this.setState((state) => ({
            ...state,
            gameData: {
                ...gameData,
                id
            },
            canStartGame: can
        }));
    }

    startGameClicked = (history) => {
                
        this.props.startingGame(this.state.gameData);
        //history.push(`/game/${ this.state.gameData.id }`);
        history.push(`/game/${ 'cji8x4oag00033c5vr0taeocx' }`);
    }

    render () {

        const { } = this.props;

        const Button = withRouter(({ history }) => <button
                className="btn--action wide"
                onClick={ this.startGameClicked }
                disabled={ !this.state.canStartGame }
                onClick={() => { this.startGameClicked(history) }}>
                <div className="btn--action__label">Start game</div>
            </button>);

        return <React.Fragment>
            <ModuleHeader label="New Game" screenheader={ true }/>
            <EditGameFieldsContainer canSubmit={ this.canStartGame }/>
            <Button/>;
        </React.Fragment>;
    }
}
