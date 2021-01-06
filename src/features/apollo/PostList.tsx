/* Core */
import { NetworkStatus } from '@apollo/client';

/* Components */
import { ErrorMessage } from './ErrorMessage';
import { PostUpvoter } from './PostUpvoter';

/* Instruments */
import * as gql from '@/graphql';

export const PostList: React.FC = () => {
    const allPostsQueryResult = gql.useAllPostsQuery({
        variables:                   allPostsQueryVars,
        notifyOnNetworkStatusChange: true,
    });

    const loadingMorePosts =
        allPostsQueryResult.networkStatus === NetworkStatus.fetchMore;

    const loadMorePosts = () => {
        allPostsQueryResult.fetchMore({
            variables: {
                skip: allPosts.length,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return previousResult;
                }

                return Object.assign({}, previousResult, {
                    // Append the new posts results to the old one
                    allPosts: [
                        ...previousResult.allPosts,
                        ...fetchMoreResult.allPosts,
                    ],
                });
            },
        });
    };

    if (allPostsQueryResult.error) {
        return <ErrorMessage message = 'Error loading posts.' />;
    }
    if (allPostsQueryResult.loading && !loadingMorePosts) {
        return <div>Loading</div>;
    }

    const { allPosts, _allPostsMeta } = allPostsQueryResult.data;
    const areMorePosts = allPosts.length < _allPostsMeta.count;

    return (
        <section>
            <ul>
                {allPosts.map((post, index) => (
                    <li key = { post.id }>
                        <div>
                            <span>{index + 1}. </span>
                            <a href = { post.url }>{post.title}</a>
                            <PostUpvoter id = { post.id } votes = { post.votes } />
                        </div>
                    </li>
                ))}
            </ul>

            {areMorePosts && (
                <button
                    disabled = { loadingMorePosts }
                    onClick = { () => loadMorePosts() }
                >
                    {loadingMorePosts ? 'Loading...' : 'Show More'}
                </button>
            )}

            <style jsx>
                {`
                    section {
                        padding-bottom: 20px;
                    }

                    li {
                        display: block;
                        margin-bottom: 10px;
                    }

                    div {
                        align-items: center;
                        display: flex;
                    }

                    a {
                        font-size: 14px;
                        margin-right: 10px;
                        text-decoration: none;
                        padding-bottom: 0;
                        border: 0;
                    }

                    span {
                        font-size: 14px;
                        margin-right: 5px;
                    }

                    ul {
                        margin: 0;
                        padding: 0;
                    }

                    button:before {
                        align-self: center;
                        border-style: solid;
                        border-width: 6px 4px 0 4px;
                        border-color: #ffffff transparent transparent
                            transparent;
                        content: '';
                        height: 0;
                        margin-right: 5px;
                        width: 0;
                    }
                `}
            </style>
        </section>
    );
};

export const allPostsQueryVars = {
    skip:  0,
    first: 10,
};
