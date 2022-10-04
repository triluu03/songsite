import { Box, Button, Typography } from '@mui/material';
import React from 'react';

type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const TypeSelect = ({ setSearch }: Props): JSX.Element => {
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
            <Typography color='info.main' variant='h3' fontSize='4em'>
                Choose your search type!
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '60%',
                    mt: '2%',
                }}
            >
                <Button
                    size='large'
                    color='secondary'
                    variant='outlined'
                    sx={{ m: '2%', fontSize: '1.25em' }}
                    onClick={() => setSearch('album')}
                >
                    Album
                </Button>
                <Button
                    size='large'
                    color='secondary'
                    variant='outlined'
                    sx={{ m: '2%', fontSize: '1.25em' }}
                    onClick={() => setSearch('artist')}
                >
                    Artist
                </Button>
                <Button
                    size='large'
                    color='secondary'
                    variant='outlined'
                    sx={{ m: '2%', fontSize: '1.25em' }}
                    onClick={() => setSearch('playlist')}
                >
                    Playlist
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '60%',
                    mb: '15%',
                }}
            >
                <Button
                    size='large'
                    color='secondary'
                    variant='outlined'
                    sx={{ m: '2%', fontSize: '1.25em' }}
                    onClick={() => setSearch('track')}
                >
                    Track
                </Button>
                <Button
                    size='large'
                    color='secondary'
                    variant='outlined'
                    sx={{
                        m: '2%',
                        fontSize: '1.25em',
                        ':disabled': {
                            color: 'secondary.main',
                            borderColor: 'secondary.main',
                            border: 0.35,
                            opacity: 0.35,
                        },
                    }}
                    onClick={() => setSearch('show')}
                    disabled
                >
                    Show
                </Button>
                <Button
                    size='large'
                    color='secondary'
                    variant='outlined'
                    sx={{
                        m: '2%',
                        fontSize: '1.25em',
                        ':disabled': {
                            color: 'secondary.main',
                            borderColor: 'secondary.main',
                            border: 0.35,
                            opacity: 0.35,
                        },
                    }}
                    onClick={() => setSearch('episode')}
                    disabled
                >
                    Episode
                </Button>
            </Box>
        </Box>
    );
};

export default TypeSelect;
