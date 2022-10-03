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

export interface ArtistItem extends ResultItem {
    followers: {
        href: string | null;
        total: number;
    };
    genres: Array<string>;
    popularity: number;
    type: 'artist';
}

interface ArtistResponse extends ResponseData {
    items: Array<ArtistItem>;
}

export type ArtistReturnedValue = {
    artists: ArtistResponse;
};

type Props = {
    searchResults: ArtistReturnedValue;
};

const ArtistResults = ({ searchResults }: Props): JSX.Element => {
    const itemList = searchResults.artists.items;

    return (
        <Box sx={{ height: 'auto', width: '95%', pl: '1.5%' }}>
            <TableContainer component={Paper}>
                <Table
                    aria-label='artists list'
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
                        <TableRow sx={{}}>
                            <TableCell>Name</TableCell>
                            <TableCell>Genres</TableCell>
                            <TableCell>Followers</TableCell>
                            <TableCell>Popularity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {itemList.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell scope='row'>
                                    <Link href={item.external_urls.spotify}>
                                        <Typography
                                            color='info.main'
                                            variant='h5'
                                            sx={{
                                                fontWeight: 'bold',
                                                ':hover': {
                                                    color: 'info.dark',
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {item.genres.map((genre) => (
                                        <Typography id={genre}>
                                            {genre}
                                        </Typography>
                                    ))}
                                </TableCell>
                                <TableCell>{item.followers.total}</TableCell>
                                <TableCell>{item.popularity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ArtistResults;
