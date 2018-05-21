import { addClub } from 'actions/clubActions';
import {
    addClubToBag,
    removeClubFromBag
} from './clubActions';

export const saveClub = (club) => (dispatch) => {

    dispatch(addClub(club));
};

export const putClubInBag = (club) => (dispatch) => {

    dispatch(addClubToBag(club));
};

export const pullClubFromBag = (club) => (dispatch) => {

    dispatch(removeClubFromBag(club));
};
