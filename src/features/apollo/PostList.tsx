/* Core */
import { NetworkStatus } from '@apollo/client';
import styled from 'styled-components';

/* Components */
import { ErrorMessage } from './ErrorMessage';
import { PostUpVoter } from './PostUpvoter';

/* Instruments */
import * as gql from '@/graphql';
import { allPostsQueryVars } from './helpers';

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

                return {
                    ...previousResult,
                    allPosts: [
                        ...previousResult.allPosts,
                        ...fetchMoreResult.allPosts,
                    ],
                };
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
        <Container>
            <PostUl>
                {allPosts.map((post, index) => (
                    <PostLi key = { post.id }>
                        <div>
                            <span>{index + 1}. </span>
                            <a href = { post.url }>{post.title}</a>
                            <PostUpVoter id = { post.id } votes = { post.votes } />
                        </div>
                    </PostLi>
                ))}
            </PostUl>

            {areMorePosts && (
                <LoadMorePostsButton
                    disabled = { loadingMorePosts }
                    onClick = { () => loadMorePosts() }
                >
                    {loadingMorePosts ? 'Loading...' : 'Show More'}
                </LoadMorePostsButton>
            )}
        </Container>
    );
};

/* Styles */
const Container = styled.section`
    padding-bottom: 20px;
`;
const PostUl = styled.ul`
    padding: 0;
    margin: 0;
`;
const PostLi = styled.li`
    display: block;
    margin-bottom: 10px;

    & div {
        display: flex;
        align-items: center;

        & span {
            margin-right: 5px;
            font-size: 14px;
        }

        & a {
            padding-bottom: 0;
            margin-right: 10px;
            font-size: 14px;
            text-decoration: none;
            border: 0;
        }
    }
`;
const LoadMorePostsButton = styled.button`
    cursor: pointer;

    &::before {
        align-self: center;
        width: 0;
        height: 0;
        margin-right: 5px;
        content: '';
        border-color: #ffffff transparent transparent transparent;
        border-style: solid;
        border-width: 6px 4px 0 4px;
    }
`;
