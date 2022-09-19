import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './reducers/searchReducer';
import tokenReducer from './reducers/tokenReducer';

export const store = configureStore({
    reducer: {
        searchValues: searchReducer,
        token: tokenReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {searchValues: SearchValueState, token: TokenState}

export type AppDispatch = typeof store.dispatch;
