import React from 'react';
import { useState, useEffect } from 'react';

import authorizeService from './service/authorizeService';

const App = (): JSX.Element => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const authorize = async (): Promise<void> => {
            const tokenDetails = await authorizeService.getToken();
            setToken(tokenDetails.access_token);
            setTimeout(() => {
                setToken('');
            }, tokenDetails.expires_in * 1000);
        };

        authorize();
    }, []);

    return <div>songsite</div>;
};

export default App;
