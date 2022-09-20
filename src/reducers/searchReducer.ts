import {
    createSlice,
    PayloadAction,
    ThunkAction,
    AnyAction,
} from '@reduxjs/toolkit';

import { RootState } from '../store';

import searchService from '../service/searchService';
import { SearchType } from '../service/searchService';

// Define a type for slice state
type SearchState = object;
// Define the initial state using that type
const initialState: SearchState = {};

// Reducer Slice
const searchSlice = createSlice({
    name: 'searchValues',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<object>) {
            return action.payload;
        },
    },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;

export const searchAnything = (
    type: SearchType,
    query: string,
    token: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        const response = await searchService.searchByAny(type, query, token);
        dispatch(setSearchValue(response));
    };
};
