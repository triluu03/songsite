import { Autocomplete, Box, TextField } from '@mui/material';

const TypeSelect = (setSearch: any): JSX.Element => {
    const options: Array<string> = [
        'album',
        'artist',
        'playlist',
        'track',
        'show',
        'episode',
    ];

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
            <Autocomplete
                options={options}
                sx={{ width: 600, height: 200 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder='Choose your search type'
                        color='info'
                        variant='standard'
                        fullWidth={true}
                        sx={{
                            input: { color: 'white', fontSize: '3em' },
                        }}
                    />
                )}
                color='primary.contrastText'
            />
        </Box>
    );
};

export default TypeSelect;
