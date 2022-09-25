import {
    ScrollContainer,
    ScrollPage,
    Animator,
    batch,
    Animation,
} from 'react-scroll-motion';

import { Fade, FadeIn } from 'react-scroll-motion';
import { Sticky, StickyIn } from 'react-scroll-motion';
import { Move, MoveIn, MoveOut } from 'react-scroll-motion';
import { ZoomIn } from 'react-scroll-motion';

import { Box, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiTypescript, SiReact } from 'react-icons/si';

const About = (): JSX.Element => {
    const styles = {
        skillBox: {
            width: 150,
            height: 150,
            borderRadius: '50%',
            border: 2,
            borderColor: 'secondary.main',
            mb: 1,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            transitionDuration: '0.5s',
        },
    };

    const ZoomInScrollOut: Animation = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp: Animation = batch(Fade(), Move(), Sticky());

    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                height: 'auto',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pb: '5%',
            }}
        >
            <ScrollContainer>
                <ScrollPage>
                    <Animator
                        animation={batch(Fade(), Sticky(), MoveOut(0, -100))}
                    >
                        <Typography variant='h3' color='secondary.main'>
                            Welcome to Songsite!
                        </Typography>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Box
                        sx={{
                            textAlign: 'center',
                            width: '50%',
                        }}
                    >
                        <Animator animation={ZoomInScrollOut}>
                            <Typography variant='h3' color='info.main'>
                                Songsite helps you search for your favorite
                                artists, songs, or albums using Spotify API.
                            </Typography>
                        </Animator>
                    </Box>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <Typography variant='h3' color='secondary.main'>
                            Songsite is built by{' '}
                            <Link
                                href='https://www.linkedin.com/in/triluu03/'
                                color='secondary.main'
                                target='_blank'
                            >
                                Tri Luu
                            </Link>{' '}
                            using:
                        </Typography>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '90%',
                            width: '100vw',
                        }}
                    >
                        <Animator
                            animation={batch(
                                MoveIn(-1000, 0),
                                MoveOut(-1000, 0)
                            )}
                        >
                            <Box
                                sx={{
                                    ...styles.skillBox,
                                    ':hover': {
                                        bgcolor: '#61dafb',
                                        transform: 'rotate(360deg)',
                                        border: 0,
                                    },
                                }}
                            >
                                <SiReact
                                    style={{ color: 'white' }}
                                    fontSize='3em'
                                />
                            </Box>
                        </Animator>
                        <Animator
                            animation={batch(MoveIn(1000, 0), MoveOut(1000, 0))}
                        >
                            <Box
                                sx={{
                                    ...styles.skillBox,
                                    ':hover': {
                                        bgcolor: '#007acc',
                                        transform: 'rotate(360deg)',
                                        border: 0,
                                    },
                                }}
                            >
                                <SiTypescript
                                    style={{ color: 'white' }}
                                    fontSize='3em'
                                />
                            </Box>
                        </Animator>
                    </Box>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Typography variant='h3' color='info.main'>
                            <Link href='/search' color='info.main'>
                                Click here
                            </Link>{' '}
                            to start using!
                        </Typography>
                        <Typography variant='h3' color='info.main'>
                            Contact Me:
                        </Typography>
                        <Typography>
                            <a
                                href='https://www.linkedin.com/in/triluu03/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <LinkedInIcon
                                    color='info'
                                    sx={{
                                        fontSize: '5em',
                                        ':hover': {
                                            color: 'secondary.main',
                                        },
                                    }}
                                />
                            </a>{' '}
                            <a
                                href='https://github.com/triluu03'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <GitHubIcon
                                    color='info'
                                    sx={{
                                        fontSize: '5em',
                                        ':hover': {
                                            color: 'secondary.main',
                                        },
                                    }}
                                />
                            </a>
                        </Typography>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </Box>
    );
};

export default About;
