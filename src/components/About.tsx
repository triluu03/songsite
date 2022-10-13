import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = (): JSX.Element => {
    const styles = {
        contactIcon: {
            m: 1,
            width: 70,
            height: 70,
            borderRadius: '50%',
            border: 1,
            bgcolor: 'secondary.main',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            transitionDuration: '0.5s',
        },
        searchTypeContainer: {
            display: 'flex',
            justifyContent: 'center',
            border: 1,
            borderColor: 'secondary.main',
            borderRadius: '16px',
            p: 1,
            m: 1,
            transitionDuration: '0.5s',
            ':hover': {
                bgcolor: 'secondary.main',
            },
        },
    };

    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                height: 'auto',
                minHeight: '100vh',
                width: '100vw',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '70vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography color='secondary.light' variant='h5'>
                    Welcome to Songsite!
                </Typography>
                <Typography
                    color='info.main'
                    variant='h3'
                    sx={{ maxWidth: '50%', textAlign: 'center' }}
                >
                    Songsite helps you search for your favorite artists, songs,
                    or albums using Spotify API.
                </Typography>
            </Box>
            <Box
                sx={{
                    minHeight: '50vh',
                    height: 'auto',
                    width: '100%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '45%',
                        mr: '6%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant='h3' color='secondary.light'>
                        Basic Features
                    </Typography>
                    <Typography
                        variant='body1'
                        color='info.main'
                        fontSize='1.5em'
                        sx={{ mt: 2 }}
                    >
                        Songsite is a web application that allows you to search
                        for information about artists, albums, playlists, or
                        tracks.
                    </Typography>
                    <Typography
                        variant='body1'
                        color='info.main'
                        fontSize='1.5em'
                        sx={{ mt: 2 }}
                    >
                        Click on the search bar above, choose what you want to
                        look for, and type in what you're thinking of.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <RouterLink
                        to='/songsite/search'
                        style={{ textDecoration: 'none' }}
                    >
                        <Box sx={{ ...styles.searchTypeContainer }}>
                            <Typography
                                variant='h4'
                                color='info.main'
                                fontSize='2em'
                            >
                                Artists
                            </Typography>
                        </Box>
                    </RouterLink>
                    <RouterLink
                        to='/songsite/search'
                        style={{ textDecoration: 'none' }}
                    >
                        <Box sx={{ ...styles.searchTypeContainer }}>
                            <Typography
                                variant='h4'
                                color='info.main'
                                fontSize='2em'
                            >
                                Albums
                            </Typography>
                        </Box>
                    </RouterLink>
                    <RouterLink
                        to='/songsite/search'
                        style={{ textDecoration: 'none' }}
                    >
                        <Box sx={{ ...styles.searchTypeContainer }}>
                            <Typography
                                variant='h4'
                                color='info.main'
                                fontSize='2em'
                            >
                                Playlists
                            </Typography>
                        </Box>
                    </RouterLink>
                    <RouterLink
                        to='/songsite/search'
                        style={{ textDecoration: 'none' }}
                    >
                        <Box sx={{ ...styles.searchTypeContainer }}>
                            <Typography
                                variant='h4'
                                color='info.main'
                                fontSize='2em'
                            >
                                Tracks
                            </Typography>
                        </Box>
                    </RouterLink>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '55%',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        mr: '7%',
                    }}
                >
                    <Typography variant='h3' color='secondary.light'>
                        Credits
                    </Typography>
                    <Typography
                        variant='body1'
                        color='info.main'
                        fontSize='1.5em'
                        sx={{ mt: 2 }}
                    >
                        This project was developed by{' '}
                        <Link
                            href='https://triluu03.github.io/personal-portfolio/'
                            target='_blank'
                            sx={{ color: 'secondary.light' }}
                        >
                            Tri Luu.
                        </Link>
                    </Typography>
                    <Typography
                        variant='h3'
                        color='secondary.light'
                        sx={{ mt: 3 }}
                    >
                        Contact me
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box
                            sx={{
                                ...styles.contactIcon,
                                ':hover': {
                                    bgcolor: '#4d8fac',
                                    transform: 'rotate(360deg)',
                                },
                            }}
                        >
                            <Link
                                href='https://github.com/triluu03'
                                target='_blank'
                            >
                                <GitHubIcon fontSize='large' />
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                ...styles.contactIcon,
                                ':hover': {
                                    bgcolor: '#00a0dc',
                                    transform: 'rotate(360deg)',
                                },
                            }}
                        >
                            <Link
                                href='https://www.linkedin.com/in/triluu03/'
                                target='_blank'
                            >
                                <LinkedInIcon fontSize='large' />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
