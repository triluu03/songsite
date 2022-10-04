import { Box, Typography, Paper, Link } from '@mui/material';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';

import { ResultItem } from './types';
import { AlbumItem } from './AlbumResults';
import { ArtistItem } from './ArtistResults';

import { ResponseData } from '../../service/searchService';

interface TrackItem extends ResultItem {
    album: AlbumItem;
    artists: Array<ArtistItem>;
    available_markets: Array<string>;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
        isrc: string;
    };
    is_local: boolean;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: 'track';
}

interface TrackResponse extends ResponseData {
    items: Array<TrackItem>;
}

export type TrackReturnedValue = {
    tracks: TrackResponse;
};

type Props = {
    searchResults: TrackReturnedValue;
};

const TrackResults = ({ searchResults }: Props): JSX.Element => {
    const itemList = searchResults.tracks.items;

    return (
        <Box sx={{ height: 'auto', width: '95%', pl: '1.5%' }}>
            <TableContainer component={Paper}>
                <Table
                    aria-label='tracks list'
                    sx={{
                        bgcolor: 'primary.main',
                        '& th': {
                            color: 'secondary.light',
                            fontSize: '2em',
                        },
                        '& td': {
                            color: 'info.main',
                            fontSize: '1.25em',
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Artists</TableCell>
                            <TableCell>Album</TableCell>
                            <TableCell>Duration(s)</TableCell>
                            <TableCell>Popularity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {itemList.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell scope='row'>
                                    <Link
                                        href={item.external_urls.spotify}
                                        target='_blank'
                                    >
                                        <Typography
                                            color='info.main'
                                            variant='h5'
                                            sx={{
                                                fontWeight: 'bold',
                                                ':hover': {
                                                    color: 'secondary.light',
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {item.artists.map((artist) => (
                                        <Link
                                            href={artist.external_urls.spotify}
                                            target='_blank'
                                        >
                                            <Typography
                                                color='info.main'
                                                fontSize='1.1em'
                                                sx={{
                                                    ':hover': {
                                                        color: 'secondary.light',
                                                    },
                                                }}
                                            >
                                                {artist.name}
                                            </Typography>
                                        </Link>
                                    ))}
                                </TableCell>
                                <TableCell>
                                    <Link
                                        href={item.album.external_urls.spotify}
                                        target='_blank'
                                    >
                                        <Typography
                                            color='info.main'
                                            fontSize='1.1em'
                                            sx={{
                                                ':hover': {
                                                    color: 'secondary.light',
                                                },
                                            }}
                                        >
                                            {item.album.name}
                                        </Typography>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {Math.floor(item.duration_ms / 1000)}
                                </TableCell>
                                <TableCell>{item.popularity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TrackResults;
