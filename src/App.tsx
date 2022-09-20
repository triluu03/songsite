import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';

import { authorize } from './reducers/tokenReducer';
import { searchAnything } from './reducers/searchReducer';

const App = (): JSX.Element => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(authorize());
    }, [dispatch]);

    const token: string = useAppSelector((state) => state.token);

    return (
        <div>
            <button
                onClick={() =>
                    dispatch(searchAnything('artist', 'Adele', token))
                }
            >
                click
            </button>
        </div>
    );
};

export default App;
