/* Core */
import {
    configureStore,
    getDefaultMiddleware,
    AnyAction,
    Middleware,
} from '@reduxjs/toolkit';

export interface State {
    lastUpdate: number;
    light: boolean;
    count: number;
}

const initialState = {
    lastUpdate: 0,
    light: false,
    count: 0,
};

const reducer = (state: State = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                lastUpdate: action.lastUpdate,
                light: !!action.light,
            };
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            };
        case 'RESET':
            return {
                ...state,
                count: initialState.count,
            };
        default:
            return state;
    }
};

const middleware: Middleware[] = [
    ...getDefaultMiddleware({
        /**
         * ? Forced to turn of due to React elements presence in Redux State Notifications slice.
         */
        serializableCheck: false,
        immutableCheck: false,
    }),
];

if (__DEV__) {
    const { createLogger } = require('redux-logger');

    const logger = createLogger({
        duration: true,
        timestamp: false,
        collapsed: true,
        colors: {
            title: (): string => '#139BFE',
            prevState: (): string => '#1C5FAF',
            action: (): string => '#149945',
            nextState: (): string => '#A47104',
            error: (): string => '#ff0005',
        },
    });
    // middleware.push(logger);
}

export const initializeStore = (preloadedState = initialState) => {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware({
                immutableCheck: false,
                serializableCheck: false,
            }),
            ...middleware,
        ],
    });
};
