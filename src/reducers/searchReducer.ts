import {
    AnyAction,
    createSlice,
    PayloadAction,
    ThunkAction,
} from '@reduxjs/toolkit';

import { RootState } from '../store';

import searchService from '../service/searchService';

// Define a type for slice state
type SearchState = Array<object>;
// Define the initial state using that type
const initialState: SearchState = [];

// Reducer Slice
const searchSlice = createSlice({
    name: 'searchValues',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<Array<object>>) {
            return action.payload;
        },
    },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;

// export const searchAnything = (type: string, query: string, token: string): ThunkAction<void, RootState, unknown, AnyAction> => {
//     return async (dispatch) => {
//         const searchReponse = await searchService.searchByAny(type, query, token)

//     }
// }
