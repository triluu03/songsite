import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks';

import { searchAnything, setSearchValue } from '../reducers/searchReducer';
import { SearchType, SearchReturnedValue } from '../service/searchService';

import SearchResults from './SearchResults';

type SearchInputProps = {
    searchType: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

// Search Input
const SearchInput = ({
    searchType,
    setSearch,
}: SearchInputProps): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useAppDispatch();
    const token: string = useAppSelector((state) => state.token);
    const searchResults: object = useAppSelector((state) => state.searchValues);

    const navigate = useNavigate();

    const submit = (
        event: React.FormEvent<HTMLFormElement>
    ): JSX.Element | void => {
        event.preventDefault();
        try {
            dispatch(
                searchAnything(searchType as SearchType, searchQuery, token)
            );
            setSearchQuery('');
        } catch (error) {
            navigate('/search');
            console.log(error);
            return (
                <Box
                    sx={{
                        width: '100vw',
                        height: '100vh',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        color='warning.main'
                        variant='h3'
                        fontSize='4em'
                    >
                        Oops! Some errors occur!
                    </Typography>
                </Box>
            );
        }
    };

    const cancel = (): void => {
        setSearch('');
        dispatch(setSearchValue({}));
    };

    return (
        <Box
            sx={{
                width: '100vw',
                height: 'auto',
                minHeight: '100vh',
                bgcolor: 'primary.main',
            }}
        >
            <form onSubmit={submit}>
                <TextField
                    placeholder={`Type in your favorite ${searchType}`}
                    variant='standard'
                    color='info'
                    type='text'
                    value={searchQuery}
                    onChange={({ target }) => setSearchQuery(target.value)}
                    sx={{
                        height: '15%',
                        maxWidth: '98%',
                        input: { color: 'white', fontSize: '4em' },
                        label: { color: 'white', fontSize: '2em' },
                        mt: '1.5%',
                        ml: '1%',
                    }}
                    fullWidth={true}
                />
                <Button
                    size='large'
                    color='secondary'
                    sx={{ fontSize: '1.25em', ml: '1%' }}
                    type='submit'
                >
                    search
                </Button>
                <Button
                    size='large'
                    color='warning'
                    onClick={cancel}
                    sx={{ fontSize: '1.25em' }}
                    type='button'
                >
                    cancel
                </Button>
            </form>
            {Object.keys(searchResults).length ? (
                <SearchResults
                    searchResults={searchResults as SearchReturnedValue}
                    searchType={searchType as SearchType}
                />
            ) : null}
        </Box>
    );
};

export default SearchInput;
