/* Core */
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export function createApolloClient(initialState) {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
        link:    new HttpLink({
            uri:         'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
            credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
        }),
        cache: new InMemoryCache().restore(initialState),
    });
}
