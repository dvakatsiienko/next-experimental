/* Core */
import { NetworkStatus } from '@apollo/client';
import styled from 'styled-components';

/* Components */
import { ErrorMessage } from './ErrorMessage';
import { PostUpVoter } from './PostUpvoter';
import { UnorderedList, ListItem, Link, Button } from '@/components/styled';

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
            <UnorderedList $flex-direction = 'column'>
                {allPosts.map((post, index) => (
                    <ListItem key = { post.id }>
                        <span css = 'color: var(--color-2);'>{index + 1}. </span>
                        <Link
                            css = 'margin-right: 10px;'
                            href = { post.url }
                            rel = 'noopener noreferrer'
                            target = '_blank'
                        >
                            {post.title}
                        </Link>

                        <PostUpVoter id = { post.id } votes = { post.votes } />
                    </ListItem>
                ))}
            </UnorderedList>

            {areMorePosts && (
                <Button
                    disabled = { loadingMorePosts }
                    onClick = { () => loadMorePosts() }
                >
                    {loadingMorePosts ? 'Loading...' : 'Show More'}
                </Button>
            )}
        </Container>
    );
};

/* Styles */
const Container = styled.section`
    padding-bottom: 20px;
`;
