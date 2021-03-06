import { ActionTypes } from '../Enums';
import { housemateData, seasonData } from '../Interfaces';

// var updateUserName: any;

const updateUserName = (userName: string) => ({
    type: ActionTypes.UPDATE_USERNAME,
    payload: userName,
});

const updateSeasonData = (seasonData: seasonData[]) => ({
    type: ActionTypes.UPDATE_SEASON_DATA,
    payload: seasonData,
});

const updateHousemateData = (housemateData: housemateData[]) => ({
    type: ActionTypes.UPDATE_HOUSEMATE_DATA,
    payload: housemateData,
});

const updateQueryRequestString = (queryString: string) => ({
    type: ActionTypes.UPDATE_QUERY_STRING,
    payload: queryString,
});

export { updateUserName, updateSeasonData, updateQueryRequestString, updateHousemateData };
