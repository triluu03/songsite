import { Link } from 'react-router-dom';

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
    const styles = {
        link: {
            textDecoration: 'none',
            color: 'white',
        },
    };

    return (
        <HideOnScroll>
            <AppBar position='sticky' color='secondary' sx={{ width: '100vw' }}>
                <Toolbar>
                    <LibraryMusicIcon fontSize='large' sx={{ ml: '3%' }} />
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
                        <Link to='/songsite/' style={styles.link}>
                            <b>About</b>
                        </Link>
                    </Button>
                    <Button
                        color='inherit'
                        variant='text'
                        size='large'
                        sx={{ fontSize: '1.25em', mr: '4%' }}
                    >
                        <Link to='/songsite/search' style={styles.link}>
                            <b>Search</b>
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Navbar;
