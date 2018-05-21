import React, { Component } from 'react';
import ScreenHeader from 'components/app/ScreenHeader';

class GameListComponent extends Component {

    componentDidMount () {

    }

    render () {

        const { games } = this.props;
        return <React.Fragment>
            <ScreenHeader label="Games"/>
            {
                games.map((game, idx)=> <div key={ `gamelistitem${ idx }` }>{game.gameName}</div>)
            }
        </React.Fragment>;
    }
}

export default GameListComponent;
