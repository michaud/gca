import React from 'react';
import EditClubContainer from 'components/club/EditClubContainer';
import EditBagClubListContainer from 'components/bag/EditBagClubListContainer';

const EditBagComponent = () => {

    return <React.Fragment>
        <EditClubContainer/>
        <EditBagClubListContainer/>
    </React.Fragment>;
};

export default EditBagComponent;
