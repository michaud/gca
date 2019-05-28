import React, { Component } from 'react';

import CourseNavigatorContainer from 'components/course/CourseNavigatorContainer';

class GameNavigatorComponent extends Component {

    render () {

        const { game } = this.props;
        return <div>
            { game.gameName }
            <CourseNavigatorContainer course={ game.course } />
            <ol className="plain-list play-bag-club-list">
                <li><button className="btn--play">driver</button></li>
                <li><button className="btn--play">3 wood</button></li>
                <li><button className="btn--play">5 wood</button></li>
                <li><button className="btn--play">hybrid</button></li>
                <li><button className="btn--play">4 iron</button></li>
                <li><button className="btn--play">5 iron</button></li>
                <li><button className="btn--play">6 iron</button></li>
                <li><button className="btn--play">7 iron</button></li>
                <li><button className="btn--play">8 iron</button></li>
                <li><button className="btn--play">9 iron</button></li>
                <li><button className="btn--play">P wedge</button></li>
                <li><button className="btn--play">S wedge</button></li>
                <li><button className="btn--play">L wedge</button></li>
                <li><button className="btn--play">Putter</button></li>
            </ol>
        </div>;
    }
}

export default GameNavigatorComponent;
