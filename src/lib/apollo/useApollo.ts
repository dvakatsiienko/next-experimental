/* Core */
import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';

let apolloClient;

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link:    new HttpLink({
            uri:         'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
            credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
        }),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        allPosts: concatPagination(),
                    },
                },
            },
        }),
    });
};

export const initApollo = (initialState = null) => {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // get hydrated here
    if (initialState) {
        _apolloClient.cache.restore(initialState);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') {
        return _apolloClient;
    }
    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = _apolloClient;
    }

    return _apolloClient;
};

export const useApollo = initialState => {
    const client = useMemo(() => initApollo(initialState), [ initialState ]);

    return client;
};
