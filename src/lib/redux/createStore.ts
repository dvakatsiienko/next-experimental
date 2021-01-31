/* Core */
import {
    configureStore,
    getDefaultMiddleware,
    Middleware
} from '@reduxjs/toolkit';

/* Reducers */
import { initialState } from './slices';
import { rootReducer } from './rootReducer';

const middleware: Middleware[] = [
    ...getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck:    false,
    }),
];

export interface State {
    lastUpdate: number;
    light: boolean;
    count: number;
}

if (__DEV__) {
    const { createLogger } = require('redux-logger');

    const logger = createLogger({
        duration:  true,
        timestamp: false,
        collapsed: true,
        colors:    {
            title:     () => '#139BFE',
            prevState: () => '#1C5FAF',
            action:    () => '#149945',
            nextState: () => '#A47104',
            error:     () => '#ff0005',
        },
        predicate: () => process.browser,
    });

    middleware.push(logger);
}

export const createStore = (preloadedState = initialState) => {
    return configureStore({
        reducer:    rootReducer,
        preloadedState,
        middleware: [
            ...getDefaultMiddleware({
                immutableCheck:    false,
                serializableCheck: false,
            }),
            ...middleware,
        ],
    });
};
