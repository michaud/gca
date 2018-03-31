import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BagClubListComponent from 'components/bag/BagClubListComponent';

const mapStateToProps = (state) => {

    const {
        bag,
        clubs
    } = state;

    return {
        bagClubs: bag.clubs.reduce((acc, clubId) => {

            const targetClub = clubs.find((club) => club.id === clubId);

            if(targetClub) acc.push(targetClub);

            return acc;
        }, [])
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(BagClubListComponent);

