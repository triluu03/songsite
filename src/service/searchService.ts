import axios from 'axios';

// Define types of the "type" parameter in search
export type SearchType =
    | 'album'
    | 'artist'
    | 'playlist'
    | 'track'
    | 'show'
    | 'episode';

// the response data config in search
export interface ResponseData {
    href: string;
    items: Array<object>;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export type SearchReturnedValue = {
    [type in
        | 'albums'
        | 'artists'
        | 'playlists'
        | 'tracks'
        | 'shows'
        | 'episodes']: ResponseData;
};

// Search Function
const baseUrl: string = 'https://api.spotify.com/v1/search';

const searchByAny = async (
    type: SearchType,
    query: string,
    token: string
): Promise<SearchReturnedValue> => {
    const response = await axios.get<SearchReturnedValue>(baseUrl, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        params: {
            q: query,
            type: type,
        },
    });
    return response.data;
};

const searchService = { searchByAny };
export default searchService;
