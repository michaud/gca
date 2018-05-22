import React, { Component } from 'react';
import ModuleHeader from 'components/app/ModuleHeader';

class GameListComponent extends Component {

    componentDidMount () {

    }

    render () {

        const { games } = this.props;
        return <React.Fragment>
            <ModuleHeader label="Games" screenheader={ true }/>
            {
                games.map((game, idx)=> <div key={ `gamelistitem${ idx }` }>{game.gameName}</div>)
            }
        </React.Fragment>;
    }
}

export default GameListComponent;
