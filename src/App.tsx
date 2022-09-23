import React from 'react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import theme from './theme';

import { authorize } from './reducers/tokenReducer';
// import { searchAnything } from './reducers/searchReducer';

import Navbar from './components/Navbar';
import About from './components/About';
import TypeSelect from './components/TypeSelect';
import Credits from './components/Credits';

const App = (): JSX.Element => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(authorize());
    }, [dispatch]);

    const [searchType, setSearchType] = useState<string>('');

    // const token: string = useAppSelector((state) => state.token);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route
                        path='/search'
                        element={<TypeSelect setSearch={setSearchType} />}
                    />
                    <Route path='/credits' element={<Credits />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
