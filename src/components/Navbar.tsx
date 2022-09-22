import { Typography, Slide, AppBar, Toolbar, Button } from '@mui/material';
import { useScrollTrigger } from '@mui/material';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

type Props = {
    children: JSX.Element;
};

const HideOnScroll = ({ children }: Props): JSX.Element => {
    const trigger: boolean = useScrollTrigger();
    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    );
};

const Navbar = (): JSX.Element => {
    return (
        <HideOnScroll>
            <AppBar position='sticky' color='secondary' sx={{ width: '100vw' }}>
                <Toolbar>
                    <LibraryMusicIcon fontSize='large' sx={{ ml: '1.5%' }} />
                    <Typography
                        variant='h4'
                        flexGrow={1}
                        component='div'
                        sx={{ m: 3 }}
                    >
                        <b>Songsite</b>
                    </Typography>
                    <Button
                        color='inherit'
                        variant='text'
                        size='large'
                        sx={{ fontSize: '1.25em' }}
                    >
                        <b>About</b>
                    </Button>
                    <Button
                        color='inherit'
                        variant='text'
                        size='large'
                        sx={{ fontSize: '1.25em' }}
                    >
                        <b>Search</b>
                    </Button>
                    <Button
                        color='inherit'
                        variant='text'
                        size='large'
                        sx={{ mr: '2.5%', fontSize: '1.25em' }}
                    >
                        <b>Credits</b>
                    </Button>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Navbar;
