import React from 'react';
import { useState, useEffect } from 'react';

import getToken from './service/getToken';

const App = (): JSX.Element => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const authorize = async (): Promise<void> => {
            const tokenDetails = await getToken();
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
