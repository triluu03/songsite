import axios from 'axios';

type SearchType =
    | 'album'
    | 'artist'
    | 'playlist'
    | 'track'
    | 'show'
    | 'episode';

type SearchReturnedValue = {
    href: string;
    items: Array<object>;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
};

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
