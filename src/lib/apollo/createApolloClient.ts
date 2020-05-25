/* Core */
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export function createApolloClient(initialState, ctx) {
    // The `ctx` (NextPageContext) will only be present on the server.
    // use it to extract auth headers (ctx.req) or similar.
    return new ApolloClient({
        ssrMode: Boolean(ctx),
        link: new HttpLink({
            uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
            credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
        }),
        cache: new InMemoryCache().restore(initialState),
    });
}
