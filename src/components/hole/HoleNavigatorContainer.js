import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { } from 'actions/gameActions';

import HoleNavigatorComponent from 'components/hole/HoleNavigatorComponent';

const mapStateToProps = (state) => {

    return {};
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(HoleNavigatorComponent);
