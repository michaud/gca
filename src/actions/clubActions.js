import { ADD_CLUB } from 'actions/actionTypes';
import { ADD_CLUB_TO_BAG, REMOVE_CLUB_FROM_BAG } from './actionTypes';

export const addClub = (club) => ({
    type: ADD_CLUB,
    club
});

export const addClubToBag = (club) => ({
    type: ADD_CLUB_TO_BAG,
    club
});

export const removeClubFromBag = (club) => ({
    type: REMOVE_CLUB_FROM_BAG,
    club
});
