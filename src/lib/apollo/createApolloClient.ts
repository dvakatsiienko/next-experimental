/* Core */
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';

export const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link:    new HttpLink({
            uri:         'https://nextjs-graphql-with-prisma-simple.vercel.app/api',
            credentials: 'same-origin',
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
