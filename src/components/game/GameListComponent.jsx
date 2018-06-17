import React, { Component } from 'react';
import ModuleHeader from 'components/app/ModuleHeader';

class GameListComponent extends Component {

    componentDidMount () {

    }

    render () {

        const { games } = this.props;
        return <React.Fragment>
            <ModuleHeader label="Games" screenheader={ true }/>
            <ol className="plain-list item-list">
            {
                games.map((game, idx) => {

                    const { gameName, gameDateTime } = game;

                    return <li key={ `gamelistitem${ idx }` } className="list__item">
                        <div className="game-item">
                            <div className="game-item__label">
                                <div className="game-label__field name">{ gameName }</div>
                                <div className="game-label__field">time{ gameDateTime }</div>
                                <div className="game-label__field">score</div>
                            </div>
                            <div>game details</div>
                            <div>edit</div>
                        </div>
                    </li>;
                })
            }
            </ol>
        </React.Fragment>;
    }
}

export default GameListComponent;
