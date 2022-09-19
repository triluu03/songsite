import axios from 'axios';

type TokenDetails = {
    access_token: string;
    expires_in: number;
    token_type: string;
};

const baseUrl: string = 'https://accounts.spotify.com/api/token';
const authData: string = `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;

const getToken = async (): Promise<TokenDetails> => {
    const response = await axios.post<TokenDetails>(baseUrl, authData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return response.data;
};

const authorizeService = { getToken };
export default authorizeService;
