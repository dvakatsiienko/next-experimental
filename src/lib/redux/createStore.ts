/* Core */
import { configureStore, Middleware } from '@reduxjs/toolkit';

/* Instruments */
import { rootReducer } from './rootReducer';

const middleware: Middleware[] = [];

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

export const createStore = (preloadedState = {}) => {
    return configureStore({
        reducer:    rootReducer,
        preloadedState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                immutableCheck:    false,
                serializableCheck: false,
            }).prepend(middleware),
    });
};
