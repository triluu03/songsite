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
import { ResponseData } from '../../service/searchService';

interface PlaylistItem extends ResultItem {
    collaborative: boolean;
    description: string;
    owner: {
        display_name: string;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    primary_color: any | null;
    public: any | null;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    };
    type: 'playlist';
}

interface PlaylistResponse extends ResponseData {
    items: Array<PlaylistItem>;
}

export type PlaylistReturnedValue = {
    playlists: PlaylistResponse;
};

type Props = {
    searchResults: PlaylistReturnedValue;
};

const PlaylistResults = ({ searchResults }: Props): JSX.Element => {
    const itemList = searchResults.playlists.items;

    return (
        <Box sx={{ height: 'auto', width: '95%', pl: '1.5%' }}>
            <TableContainer component={Paper}>
                <Table
                    aria-label='playlists list'
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
                            <TableCell>Owner</TableCell>
                            <TableCell>Total Tracks</TableCell>
                            <TableCell>Collaborative</TableCell>
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
                                    <Link
                                        href={item.owner.external_urls.spotify}
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
                                            {item.name}
                                        </Typography>
                                    </Link>
                                </TableCell>
                                <TableCell>{item.tracks.total}</TableCell>
                                <TableCell>
                                    {item.collaborative ? 'Yes' : 'No'}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PlaylistResults;
