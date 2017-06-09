import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ClubScoreInput = (props) => {

const { clubs } = props;
    return clubs && <ol className="layout--table list--plain">
         { clubs.map((club, idx) => 
            <li key={ idx } className="cell cell--1-5 btn--club"><button className="btn btn--fill">{ club.name }</button></li>) }
        <li className="cell cell--1-5"><button className="btn btn--fill">holed</button></li>
    </ol>;
}

const actions = {};

const mapStateToProps = (state) => {

    return {
        clubs: state.player.bag.clubs
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClubScoreInput);
