import React from 'react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';

import { ThemeProvider } from '@mui/material';
import theme from './theme';

import { authorize } from './reducers/tokenReducer';
// import { searchAnything } from './reducers/searchReducer';

import TypeSelect from './components/TypeSelect';
import Navbar from './components/Navbar';

const App = (): JSX.Element => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(authorize());
    }, [dispatch]);

    const [searchType, setSearchType] = useState<string>('');

    // const token: string = useAppSelector((state) => state.token);

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <TypeSelect setSearch={setSearchType} />
        </ThemeProvider>
    );
};

export default App;
