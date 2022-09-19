import {
    createSlice,
    PayloadAction,
    ThunkAction,
    AnyAction,
} from '@reduxjs/toolkit';

import { RootState } from '../store';

import authorizeService from '../service/authorizeService';

// Define a type for slice state
type TokenState = string;
// Define the initial state using that type
const initialState: TokenState = '';

// Reducer Slice
const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            return action.payload;
        },
    },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;

export const authorize = (): ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
> => {
    return async (dispatch) => {
        const tokenDetails = await authorizeService.getToken();
        dispatch(setToken(tokenDetails.access_token));
        setTimeout(() => {
            dispatch(setToken(''));
        }, tokenDetails.expires_in * 1000);
    };
};
