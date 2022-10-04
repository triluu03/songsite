import React from 'react';
import { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import theme from './theme';

import { authorize } from './reducers/tokenReducer';

import Navbar from './components/Navbar';
import About from './components/About';
import TypeSelect from './components/TypeSelect';
import SearchInput from './components/SearchInput';

const App = (): JSX.Element => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(authorize());
    }, [dispatch]);

    const [searchType, setSearchType] = useState<string>('');

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {searchType === '' ? <Navbar /> : null}
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route
                        path='/search'
                        element={
                            searchType === '' ? (
                                <TypeSelect setSearch={setSearchType} />
                            ) : (
                                <SearchInput
                                    searchType={searchType}
                                    setSearch={setSearchType}
                                />
                            )
                        }
                    />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
