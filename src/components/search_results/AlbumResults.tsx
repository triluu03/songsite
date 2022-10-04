import { Typography, Box, Paper, Link } from '@mui/material';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';

import { ResultItem } from './types';
import { ArtistItem } from './ArtistResults';

import { ResponseData } from '../../service/searchService';

export interface AlbumItem extends ResultItem {
    album_type: string;
    artists: Array<ArtistItem>;
    available_markets: Array<string>;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: 'album';
}

interface AlbumResponse extends ResponseData {
    items: Array<AlbumItem>;
}

export type AlbumReturnedValue = {
    albums: AlbumResponse;
};

type Props = {
    searchResults: AlbumReturnedValue;
};

const AlbumResults = ({ searchResults }: Props): JSX.Element => {
    const itemList = searchResults.albums.items;

    return (
        <Box sx={{ height: 'auto', width: '95%', pl: '1.5%' }}>
            <TableContainer component={Paper}>
                <Table
                    aria-label='albums list'
                    sx={{
                        bgcolor: 'primary.main',
                        '& th': {
                            color: 'secondary.light',
                            fontSize: '1.85em',
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
                            <TableCell>Release Date</TableCell>
                            <TableCell>Total Tracks</TableCell>
                            <TableCell>Album Type</TableCell>
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
                                <TableCell>{item.release_date}</TableCell>
                                <TableCell>{item.total_tracks}</TableCell>
                                <TableCell>{item.album_type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AlbumResults;
