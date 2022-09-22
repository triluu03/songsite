import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme: Theme = createTheme({
    palette: {
        primary: {
            main: '#191414',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#1DB954',
            contrastText: '#FFFFFF',
        },
        info: {
            main: '#FFFFFF',
        },
    },
});

export default theme;
